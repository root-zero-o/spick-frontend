/* IMPORT */
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { __getComment } from '../redux/modules/comment';
import Comment from './Comment';
import Commenting from './Commenting';

// map 돌려서 댓글창 만드는 컴포넌트!

const CommentContainer = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(__getComment())
  },[])
  
  const commentInfo = useSelector(state=>state.comment.commentList);

  return (
    <>
        <Commenting/>
        {commentInfo?(commentInfo.map((value,index)=>{
          return <Comment 
          key = {index}
          id={value.id} 
          comment={value.reply_text} 
          user_id={value.reply_id} 
          user_pic={value.reply_picURL}
          user_nick={value.reply_nickname}/>
        })):<></>}
        <Comment/>
        <Comment/>
        <Comment/>
    </>
  )
}

export default CommentContainer;
