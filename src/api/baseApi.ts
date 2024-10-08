import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [BASE_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({}),
});

export const {} = baseApi;
