import React from 'react'
import styled from 'styled-components'

const Mypage = () => {
  return (
    <Ground>
      <Back>
        <UserPic></UserPic>
        <UserNick>Luke</UserNick>
      </Back>
    </Ground>
  )
}

const UserNick = styled.img`
  width: 7rem;
  height:rem;
  background-color: yellow;
`;

const UserPic = styled.img`
  width: 10rem;
  height:10rem;
  background-color: tomato;
`;


const Back = styled.div`
  width:70vw;
  height:100vh;
  background-color: #171717;

`;

const Ground = styled.div`
  display: flex;
  justify-content: center;

`;


export default Mypage