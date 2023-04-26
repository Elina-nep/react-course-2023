import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiCard } from "interfaces/apiCardInterface";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

const headers = {
  Accept: "application/json",
  Authorization: "Bearer f-EyW8ejqqccKgA2mXPh",
};

export const LORApi = createApi({
  reducerPath: "LORApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://the-one-api.dev/v2/character`,
    headers: headers,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    return action.payload[reducerPath];
  },
  endpoints: (build) => ({
    getCharacters: build.query<{ docs: IApiCard[] }, string>({
      query: (name) => {
        console.log("fetch_____", name);
        if (!name) {
          return `?limit=9`;
        }
        return `?name=/${name}/i&limit=9`;
      },
    }),
  }),
});
