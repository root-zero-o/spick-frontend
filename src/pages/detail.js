/* IMPORT */
import React from 'react'
// import components
import Header from '../components/Header'
import DetailBox from '../components/DetailBox'
import CommentContainer from '../components/CommentContainer'

// detail 페이지

const Detail = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Header/>
      <DetailBox/>
      <CommentContainer/>
    </div>
  )
}

export default Detail