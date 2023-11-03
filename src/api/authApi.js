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
          console.log(data);
          if (data.results?.user) dispatch(authSignin(data.results?.user));
        } catch (error) {
          console.log(error);
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
          console.log(error);
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
          dispatch(authSignout());
        } catch (error) {
          console.log(error);
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
