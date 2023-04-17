import { rest } from "msw";
import response from "./res.json";
import { fetch, Headers, Request, Response } from "cross-fetch";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get("https://the-one-api.dev/v2/character", (req, res, ctx) => {
    console.log("____________res");
    return res(ctx.status(200), ctx.json(response));
  }),
  //   rest.get("https://the-one-api.dev/v2/character", (req, res, ctx) => {
  //     req.url.searchParams.get("name");
  //     return res(ctx.status(200), ctx.json(response));
  //   }),
];
