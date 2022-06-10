import React from "react";
import styled from "styled-components";
import Rank from "./Rank";
// import image
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";

const RankContainer = () => {
  return (
    <StRankContainer>
        <StRankWrap>
          <StArrow><StImg src={leftArrow}/></StArrow>
          <Rank/>
          <Rank/>
          <Rank/>
          <Rank/>
          <StArrow><StImg src={rightArrow}/></StArrow>
        </StRankWrap>
    </StRankContainer>
  )
}

const StRankContainer = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  height: 250px;
  padding: 15px;
`;

const StRankWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const StArrow = styled.button`
  height: 50%;
  width: 80px;
  background: rgba(0,0,0,0.3);
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  border: none;
  &:hover{
    cursor: pointer;
    background-color: rgba(255,255,255,0.1);
  }
`;

const StImg = styled.img`
    width: 60%;
    height: 50%;
`;
export default RankContainer;
