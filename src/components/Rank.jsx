import React from 'react'
import styled from 'styled-components';

const Rank = () => {
  return (
    <StRankWrap>
        <StRankCard>
            <StImg></StImg>
            <StText>
              <StLike>좋아요 0개</StLike>
            </StText>
        </StRankCard>
    </StRankWrap>
  )
}

const StRankWrap = styled.div`
    display: flex;
    align-items: center;
    height: 90%;
    margin: 0px 5px;
`;

const StRankCard = styled.div`
    width: 200px;
    height: 100%;
    background: rgb(49,81,110);
    background: -moz-linear-gradient(left, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    background: -webkit-linear-gradient(left, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    background: linear-gradient(to right, rgb(49,81,110) 0%, rgb(63,119,151) 100%);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.7);
    &:hover{
      cursor: pointer;
      background: #4581A4;
    }
`;

const StImg = styled.div`
  height: 80%;
  background-color: #ddd;
`;

const StText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5px;
  height: 20%;  
`;

const StLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60%;
  background-color: #2d5069;
  color: #a9daf2;
  font-size: 13px;
`;

export default Rank;
