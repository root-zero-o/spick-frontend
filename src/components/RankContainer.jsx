/* IMPORT */
import React, { useState } from "react";
// import components
import Rank from "./Rank";
import styled from "styled-components";
// import images
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";

import { useGetRank } from '../Hooks/useGetRank';

// Rank map돌리는 컴포넌트

const RankContainer = () => {

  const [isLeft, setIsLeft] = useState(0);

  const {data} = useGetRank();
  console.log(data);

  const onLeftClick = () => {
    setIsLeft(240)
    setTimeout(() => {
      setIsLeft(0)
    }, 2500)
  }
  const onRightClick = () => {
    setIsLeft(-240)
    setTimeout(() => {
      setIsLeft(0)
    }, 2500)
  }
  

  return (
    <StContainer>
      <div style={{display: "flex", alignItems:"center"}}>
        <StArrow src={leftArrow} onClick={onLeftClick}/>
          <StRankWrap styleName="container">
            {data?.map((value,index)=>{
                    return <Rank
                        isLeft = {isLeft}
                        board_id={value.board_id}
                        board_imgURL={value.board_imgURL}
                        replycount={value.replycount}
                        user_pic={value.user_picURL}
                        user_nick={value.user.nickname}/>})}
          </StRankWrap>
        <StArrow src={rightArrow} onClick={onRightClick}/>
      </div>
      <div style={{display: "flex", alignItems:"center"}}>
        <StDot isLeft={isLeft}/>
        <StDot isLeft={isLeft}/>
        <StDot isLeft={isLeft}/>
      </div>
    </StContainer>
  )
}




/* STYLED-COMPONENTS */

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 250px;
  padding: 15px;
`;

const StRankWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 710px;
  height: 230px;
  background-color: rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 0px 10px;
  padding: 0px 10px;
  float: left;
  `;

const StArrow = styled.img`
  height: 30%;
  width: 30px;
  background: rgba(0,0,0,0.3);
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  border: none;
  &:hover{
    background-color: rgba(255,255,255,0.1);
    cursor: pointer;
  }
`;

const StDot = styled.div`
  width: 10px;
  height: 10px;
  margin: 10px 3px;
  border-radius: 50%;
  background-color: white;
  &:first-child{
    opacity : ${props => props.isLeft === 240 ? "1" : "0.2"};
  }
  &:nth-child(2){
    opacity : ${props => props.isLeft === 0 ? "1" : "0.2"};
  }
  &:last-child{
    opacity : ${props => props.isLeft === -240 ? "1" : "0.2"};
  }
`;

export default RankContainer;
