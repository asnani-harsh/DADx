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
      getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
      getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}` }),
      getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}` }),
      getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
      getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
      getSongsBySearch: builder.query({query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    }),
});
export const{
  useGetSongsByGenreQuery,
  useGetSongRelatedQuery,
  useGetSongDetailsQuery,
  useGetTopChartsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,

} = shazamCoreApi;