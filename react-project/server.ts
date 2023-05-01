import express from "express";
import { createServer as createViteServer } from "vite";

const PORT = process.env.PORT || 3001;

const _createServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  app.use("*", async (req, res) => {
    const stream = await render(req.originalUrl, {
      bootstrapModules: ["./src/entry-client.tsx"],
      onShellReady() {
        stream.pipe(res);
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
