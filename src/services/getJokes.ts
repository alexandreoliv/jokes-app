import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jokesApi = createApi({
	reducerPath: "jokes",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000",
	}),
	endpoints: (builder) => ({
		getJokes: builder.query({
			query: () => "api/v1/jokes",
		}),
	}),
});

export const { useGetJokesQuery } = jokesApi;
