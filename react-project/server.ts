import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
// const style = await import("./src/pages/css/styles");
// import { render } from "./src/entry-server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const _createServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  let html = fs
    .readFileSync(path.resolve(__dirname, "./index.html"))
    .toString();

  app.use(vite.middlewares);

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  app.use("*", async (req, res) => {
    html = await vite.transformIndexHtml(req.url, html);
    const parts = html.split("not rendered");
    res.write(parts[0]);
    const stream = render(req.originalUrl, {
      bootstrapModules: ["./src/entry-client.tsx"],
      onShellReady() {
        // res.setHeader("Content-type", "text/html");
        stream!.pipe(res);
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
      onError(err) {
        console.error(err);
      },
    });
  });
  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
};

_createServer();

// app.use("*", async (req, res, next) => {
//   const url = req.originalUrl;

//   try {
//     const render = await vite.ssrLoadModule("/src/entry-server.tsx");
//     // const func = await render["render"];
//     // const gc = render["gc"];
//     const nodes = await render["render"](url);

//     const pipe = renderToPipeableStream(nodes, {
//       bootstrapModules: ["./src/entry-client.tsx"],
//       onShellReady: () => {
//         res.setHeader("Content-type", "text/html");
//         pipe.pipe(res);
//       },
//       onError: (err) => {
//         console.error(err);
//       },
//     });
//   } catch (e) {
//     vite.ssrFixStacktrace(e as Error);
//     next(e);
//   }
// });

// app.use(
//   "/assets",
//   express.static(path.resolve(__dirname, "./dist/client/assets"))
// );
