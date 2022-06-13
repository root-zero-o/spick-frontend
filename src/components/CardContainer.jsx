/* IMPORT */
import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import components
import Card from "./Card";
import { StContainer } from "./StyleG";
//import middleware
import { getPostsDB } from "../redux/modules/post";

// home 화면 카드들 map 돌리는 컴포넌트

const CardContainer = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsDB())
  },[])

  const postList = useSelector(state => state.post.list);

  return (
    <StContainer>
        {postList.map((value, index) => {
          return <Card
            key={index}
            id={value.id}
            board_title={value.board_title}
            board_imgURL={value.board_imgURL}
            nickname={value.nickname}
            user_picURL={value.user_picURL}
            like={value.like}/>
        })}
    </StContainer>
  )
}

export default CardContainer;
