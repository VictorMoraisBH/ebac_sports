    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sua-api.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<any, void>({
            query: () => 'products',
        }),
    }),
    });

    export const { useGetProductsQuery } = api;
