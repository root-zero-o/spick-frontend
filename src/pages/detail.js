/* IMPORT */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import components
import Header from '../components/Header'
import DetailBox from '../components/DetailBox'
import CommentContainer from '../components/CommentContainer'
// import middleware
import { getPostsDB } from "../redux/modules/post"
import { __getComment } from '../redux/modules/comment';


// detail 페이지

const Detail = () => {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPostsDB())
  dispatch(__getComment())
},[])

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Header/>
      <DetailBox/>
      <CommentContainer/>
    </div>
  )
}

export default Detail