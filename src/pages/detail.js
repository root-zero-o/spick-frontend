/* IMPORT */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import components
import Header from '../components/Header'
import DetailBox from '../components/DetailBox'
import CommentContainer from '../components/CommentContainer'
// import middleware
import { getPostsDB } from "../redux/modules/post"
import { useParams } from 'react-router-dom';

// detail 페이지

const Detail = () => {
  const board_id = useParams().board_id;

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPostsDB())
},[])

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Header/>
      <DetailBox/>
      <CommentContainer board_id={board_id}/>
    </div>
  )
}

export default Detail