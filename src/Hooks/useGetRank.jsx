import React from 'react'
import { useQuery } from "react-query";
// import axios instance
import apis from '../api/main';

export const useGetRank = () => {
    const fetcher = async () => {
        const { data } = await apis.getRank();
        return data;
      };

  return useQuery("rank", fetcher); 
}
