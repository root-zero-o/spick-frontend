import React from 'react'
import { useQuery } from "react-query";
// import axios instance
import apis from '../api/main';

export const useGetPosts = () => {
    const fetcher = async () => {
        const { data } = await apis.getPosts();
        return data;
      };

  return useQuery("posts", fetcher); 
}
