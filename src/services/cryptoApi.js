import { BehanceSquareOutlined } from '@ant-design/icons';
import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b6ecf7db2fmsh3fd91bc982ab59fp1bf454jsnafb4ac5a89cc'
  }
  const baseUrl = 'https://coinranking1.p.rapidapi.com';
  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi =createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getExchanges:builder.query({
          query:(count)=> createRequest(`/exchanges`),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      })
    })
  });

  export const { useGetCryptosQuery,useGetExchangesQuery,useGetCryptoDetailsQuery  } = cryptoApi;



