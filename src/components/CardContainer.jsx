/* IMPORT */
import React from 'react'
// import components
import Card from "./Card";
import { StContainer } from "./StyleG";
// import axios instance
import { useGetPosts } from '../Hooks/useGetPosts';

// home 화면 카드들 map 돌리는 컴포넌트

const CardContainer = () => {
 
  const { data } = useGetPosts();

  return (
    <StContainer>
        {data?.map((value, index) => {
          return <Card
            key={index}
            id={value.board_id}
            board_title={value.board_title}
            board_imgURL={value.board_imgURL}
            nickname={value.nickname}
            user_picURL={value.user_pic}
            like={value.like}/>
        })}
    </StContainer>
  )
}

export default CardContainer;
