import { async } from '@firebase/util';
import React from 'react'
import { useQuery } from 'react-query'


import apis from "../api/main";

export const useGetComment = ()=>{
    const fetcher = async()=>{
        const {data} = await apis.getComments();
        return data;
    }
    return useQuery("comments",fetcher)

}