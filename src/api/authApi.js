import { createApi } from "@reduxjs/toolkit/query/react";
import { belogBaseQuery } from "../app/settings";
import {
  authLoading,
  authSignin,
  authSignout,
} from "../features/auth/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: belogBaseQuery("auth"),
  endpoints: (builder) => ({
    authResult: builder.query({
      query: () => ({
        url: `/result`,
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          dispatch(authLoading());
          const { data } = await queryFulfilled;
          // console.log(data);
          if (data.results?.user) dispatch(authSignin(data.results?.user));
        } catch (error) {
          console.error("Error: User account not found.");
        }
      },
    }),
    authRefresh: builder.query({
      query: () => ({
        url: `/refresh`,
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          dispatch(authLoading());
          const { data } = await queryFulfilled;
          if (data.results?.user) dispatch(authSignin(data.results?.user));
        } catch (error) {
          console.error("Error: Auth refresh failed.");
        }
      },
    }),
    authLogout: builder.query({
      query: () => ({
        url: `/logout`,
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Error: Logout error.");
        } finally {
          dispatch(authSignout());
        }
      },
    }),
  }),
});

export const {
  useAuthLogoutQuery,
  useAuthRefreshQuery,
  useAuthResultQuery,
  useLazyAuthLogoutQuery,
  useLazyAuthRefreshQuery,
  useLazyAuthResultQuery,
} = authApi;
