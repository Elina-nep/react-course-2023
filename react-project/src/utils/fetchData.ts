import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiCard } from "../interfaces/apiCardInterface";

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

export const { useGetCharactersQuery } = LORApi;
