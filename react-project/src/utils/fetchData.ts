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
        if (!name) {
          return `?limit=9`;
        }
        return `?name=/${name}/i&limit=9`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = LORApi;

// export const fetchData = async (name: string) => {
//   let params = `?name=/${name}/i&limit=9`;
//   if (!name) {
//     params = `?limit=9`;
//   }
//   const rawPersons = await fetch(
//     `https://the-one-api.dev/v2/character${params}`,
//     {
//       headers: headers,
//     }
//   );
//   const persons = await rawPersons.json();
//   return persons;
// };
