import React from 'react'
import styled from 'styled-components';

const Card = () => {
  return (
    <StCardBox>
        <StPostBox width="55%">
            <StImg></StImg>
            <StDiv>
                <StSpan>Witcher 3 : wild hunt</StSpan>
            </StDiv>
        </StPostBox>
        <StPostBox width="45%">
            <StDiv>
                <StLikeDiv> 좋아요 0개</StLikeDiv>
                <StUserImg></StUserImg>
                <StSpan>근영</StSpan>
            </StDiv>
        </StPostBox>
    </StCardBox> 
  )
}

const StCardBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    margin: 10px 0px;
    background-color: rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
    &:hover{
        background-color: rgba(0,0,0,0.4);
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.3);
    }
`;

const StPostBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: ${(props) => props.width};
    height: 95%;
`;

const StLikeDiv = styled.div`
    width: 100px;
    height: 25px;
    background-color: #4c6b22;
    color: #85b72a;
    margin: 0px 30px;
    text-align: center;
`;

const StUserImg= styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: tomato;
    margin: 0px 10px;
`;


const StImg = styled.div`
    width: 500px;
    height: 100%;
    background-color: #ddd;
`;

const StDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width :600px;
    margin: 20px;
`;

const StSpan = styled.span`
    color: white;
    font-size: 25px;
`;

export default Card;
