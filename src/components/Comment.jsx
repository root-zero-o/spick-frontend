/* IMPORT */
import React from 'react'
import styled from 'styled-components'

// 댓글 박스 하나 나타내는 컴포넌트!

 const Comment = () => {
  return (
    <StCommentBox>
        <StDiv width="25%">
            <StUserImg></StUserImg>
            <div style={{fontWeight:"bold"}}>석우</div>
        </StDiv>
        <StDiv width="75%">컴퍼니 오브 히어로즈 재밌음 ㅡㅡ</StDiv>
    </StCommentBox>
  )
}

/* STYLED-COMPONENTS */

const StCommentBox = styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    height: 90px;
    margin: 10px 0px;
    background-color: #16202d;
    border-top: 2px solid #264357;
`;

const StDiv = styled.div`
    display: flex;
    align-items: center;
    width: ${(props)=> props.width};
    height: 80%;
    margin: 30px;
    color: white;
`;

const StUserImg = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    background-color: tomato;
    border-radius: 50%;
`;

export default Comment;
