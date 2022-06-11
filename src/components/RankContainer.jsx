import React from "react";
import styled from "styled-components";
import Rank from "./Rank";
// import styled-components
import {StContainer} from "./StyleG";
// import images
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";


const RankContainer = () => {
  return (
    <StContainer height="250px">
        <StRankWrap>
          <StArrow src={leftArrow}></StArrow>
          <Rank/>
          <Rank/>
          <Rank/>
          <Rank/>
          <StArrow src={rightArrow}></StArrow>
        </StRankWrap>
    </StContainer>
  )
}

const StRankWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const StArrow = styled.img`
  height: 30%;
  width: 30px;
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
