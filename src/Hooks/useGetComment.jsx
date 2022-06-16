import { useQuery } from 'react-query'
import apis from "../api/main";


export const useGetComment = ({board_id})=>{
    const fetcher = async ()=>{
        const {data} = await apis.getComments({board_id});
        return data;
    }
    return useQuery("comments", fetcher)

}