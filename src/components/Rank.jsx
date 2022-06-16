/* IMPORT */
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Rank 부분 카드 하나하나를 나타내는 컴포넌트
const Rank = (props) => {
  return (
    <StRankWrap isLeft={props.isLeft}>
      <StLink to ={`/detail/${props.board_id}`}>
        <StRankCard>
            <StImg src={props.board_imgURL}></StImg>
            <StText>
              <StLike>댓글 {props.replycount}개</StLike>
            </StText>
        </StRankCard>
        </StLink>
    </StRankWrap>
  )
}

/* STYLED-COMPONENTS */

const StLink = styled(Link)`
  text-decoration: none;
`;


const StRankWrap = styled.div`
    display: flex;
    align-items: center;
    width: 900px;
    height: 90%;
    margin: 0px 5px;
    float: left;
    transition: transform 0.5s ease-in-out;
    transform: ${ (props) => `translate(${props.isLeft}px)`};
`;

const StRankCard = styled.div`
    width: 230px;
    height: 200px;
    background: rgb(49,81,110);
    background: -moz-linear-gradient(left, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    background: -webkit-linear-gradient(left, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    background: linear-gradient(to right, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.7);
    transition: transform 0.3s ease-in-out;
    &:hover{
      cursor: pointer;
      background: #4581A4;
      width :230px;
      transform: translateY(-10px);
    }
`;

const StImg = styled.img`
  width: 233px;
  height: 150px;
  overflow: hidden;
  background-color: #ddd;
  
`;

const StText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;  
  margin-right: 5px;
`;

const StLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  background-color: #2d5069;
  color: #a9daf2;
  font-size: 13px;
`;

export default Rank;
