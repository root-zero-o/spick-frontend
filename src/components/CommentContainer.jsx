/* IMPORT */
import React from 'react'
// import components
import Comment from './Comment';
import Commenting from './Commenting';

// map 돌려서 댓글창 만드는 컴포넌트!

const CommentContainer = () => {
  return (
    <>
        <Commenting/>
        <Comment/>
        <Comment/>
        <Comment/>
    </>
  )
}

export default CommentContainer;
