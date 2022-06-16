import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCookie } from '../Cookie';
import { useGetComment } from '../Hooks/useGetComment';
import Comment from './Comment';
import Commenting from './Commenting';
// map 돌려서 댓글창 만드는 컴포넌트!
const CommentContainer = ({board_id}) => {

  const dispatch = useDispatch();
  const isToken = getCookie("token");

  // useEffect(()=>{
  //   dispatch(__getComment({board_id}))
  // },[dispatch])

  const {data} = useGetComment({board_id});

  
  const commentList = useSelector(state=>state.comment.commentList);
  return (
    <>
    {getCookie("token")===undefined?<></>:<Commenting board_id={board_id} />}
       {
        data === undefined ? 
         "" :data.map((value,index)=>{
          return <Comment
              key = {index}
              id={value.reply_id}
              board_id={board_id}
              comment={value.reply_text}
              user_pic={value.reply_picURL}
              user_nick={value.reply_nickname}/>
        })
      }
    </>
  )
}

export default CommentContainer;