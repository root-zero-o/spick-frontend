import React from 'react'
import styled from 'styled-components'






const Commenting = () => {
    const islogin = false;
  return (
    <CommentBox>
        
        <Title> Company of Heroes2 제품에 대한 평가 작성</Title>
        <Body>
            <UserBox>
                <UserPic/>
                <UserNick></UserNick>
            </UserBox>
            <InputBox/>
            <SubmitButton>Submit</SubmitButton>
        </Body>
    </CommentBox>
  )
}


const Title =styled.div`
width: 100%;
font-size: 1.2rem;
color:#57beed;
`;

const Body =styled.div`
height: 10rem;
display: flex;
align-items: center;
`;

const UserNick=styled.p`
    width:6rem;
    height:2rem;
    margin:0 0 0 1rem;
    background-color: yellow;
`;

const UserPic=styled.img`
    width:4rem;
    height: 4rem;
    background-color: yellow;
    margin:0 0 0.5rem 0.7rem;
`;


const UserBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.5rem;
    height:8rem;
    margin: 0 0 0 1rem;
    
    
`;

const SubmitButton = styled.button`
    width:5rem;
    height:2rem;
    margin:0 1rem 0 1rem;
    background-color: #98bbcf;
    color: #727da6;
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

const InputBox = styled.textarea`
    width:500px;
    height:7rem;
    padding: 0.5rem;
    margin:0 0 0 1rem;
    background-color: #222b35;
    color:white;
`;

const CommentBox=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    width: 800px;
    height: 12rem;
    margin: 10px 0px;
    background: #313B46;
background: -moz-linear-gradient(-45deg, #313B46 0%, #414D5A 51%, #576674 100%);
background: -webkit-linear-gradient(-45deg, #313B46 0%, #414D5A 51%, #576674 100%);
background: linear-gradient(135deg, #313B46 0%, #414D5A 51%, #576674 100%);
    border-top: 2px solid #264357;
`;


export default Commenting