import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
         headers.set('X-RapidAPI-Key', '0611a2e2eamsh0426340e76c5690p16eba5jsnba9a74930eb4');
        return headers;
        },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
});
export const{
  useGetTopChartsQuery,

} = shazamCoreApi;