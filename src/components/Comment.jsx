/* IMPORT */
import React from 'react'
import styled from 'styled-components'

// 댓글 박스 하나 나타내는 컴포넌트!

 const Comment = () => {
    const islogin = true;

  return (
    <StCommentBox>
    <StUserBox><StUserPic/><StUserNick></StUserNick></StUserBox>
    <StTextBox/>
    {islogin?
    (<StButtons>
        <StButton>Edit</StButton>
        <StButton>Delete</StButton>
    </StButtons>):
    <></>}
    </StCommentBox>
    
  )
}

/* STYLED-COMPONENTS */


const StButton=  styled.button`
    width:5rem;
    height:2rem;
    margin: 9px 0 9px 1rem;
    text-align: center;
    background-color: #2b4553;
    color: #46a1d9;
    border:none;
    border-radius: 0.3rem;
    &:hover{
        background: #66BFF2;
background: -moz-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
background: -webkit-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
background: linear-gradient(to right, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
color:white;   
}
    cursor: pointer;
`;

const StButtons=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StUserNick=styled.p`
    width:6rem;
    height:2rem;
    margin:0 0 0 1rem;
    background-color: yellow;
`;

const StUserPic=styled.img`
    width:4rem;
    height: 4rem;
    background-color: yellow;
    margin:0 0 0.5rem 0.7rem;
`;

const StUserBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.5rem;
    height:8rem;
    margin: 0 0 0 1rem;
    
    
`;

const StTextBox = styled.div`
    text-align: center;
    width:500px;
    height:8rem;
    margin:0 0 0 3rem;
    background-color: yellow;
`;

const StCommentBox=styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    height: 10rem;
    margin: 10px 0px;
    background-color: rgba(39,65,86,255);
    border-top: 2px solid #264357;
`;


export default Comment;
