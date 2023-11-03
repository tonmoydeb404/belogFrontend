import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BELOG_API = import.meta.env.VITE_APP_BELOG_API;
export const belogBaseQuery = (basePath) =>
  fetchBaseQuery({
    baseUrl: `${BELOG_API}/${basePath}`,
    credentials: "include",
  });
