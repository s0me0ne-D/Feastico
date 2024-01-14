import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
	reducerPath: "recipesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://tasty.p.rapidapi.com/",
		prepareHeaders: (headers, { getState }) => {
			headers.set("X-RapidAPI-Host", "tasty.p.rapidapi.com");
			headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY as string);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getRecipeById: builder.query<any, string | undefined>({
			query: (id) => `recipes/get-more-info?id=${id}`,
		}),
		getListByName: builder.query<any, string>({
			query: (name) => `list?from=0&size=50&q=${name}`,
		}),
	}),
});
export const { useGetRecipeByIdQuery, useGetListByNameQuery } = recipesApi;
