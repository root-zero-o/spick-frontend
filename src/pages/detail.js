/* IMPORT */
import React from 'react'
import { useParams } from 'react-router-dom';
// import components
import Header from '../components/Header'
import DetailBox from '../components/DetailBox'
import CommentContainer from '../components/CommentContainer'


// detail 페이지

const Detail = () => {

  const board_id = useParams().board_id;

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Header/>
      <DetailBox/>
      <CommentContainer board_id={board_id}/>
    </div>
  )
}

export default Detail