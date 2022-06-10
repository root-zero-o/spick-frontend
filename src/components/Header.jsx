import React from 'react'
import styled from 'styled-components';
// import image
import logo from '../images/logo.png';

// 헤더
const Header = () => {

  return (
    <StHeaderWrapper>
        <div>
            <StImg src={logo}/>
            <StLogo>SPICK</StLogo>
        </div>
        <StLogInDiv>
            <div>로그인</div>
            <div>회원가입</div>
        </StLogInDiv>
    </StHeaderWrapper>
  )
}

const StHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width : 100vw;
    min-width: 800px;
    height: 15vh;
    min-height: 150px;
`;

const StImg = styled.img`
    width: 50px;
    height: 50px;
`; 

const StLogo = styled.h2`
    font-size: 28px;
    color: white;
    letter-spacing: 3px;
`;

const StLogInDiv = styled.div`
    background-color: tomato;
    width: 20%;
`;

export default Header;
