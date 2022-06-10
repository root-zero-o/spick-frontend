import React from "react"
import styled from "styled-components";
// import image
import logo from "../images/logo.png";

// 헤더
const Header = () => {

  return (
    <StHeaderWrapper>
        <StLogoDiv>
            <StImg src={logo}/>
            <StLogo>SPICK</StLogo>
        </StLogoDiv>
        <StLogInDiv>
            <StBtn>로그인</StBtn>
            <StBtn>회원가입</StBtn>
            <StSearchInput placeholder="검색하기"/>
            <StSearchBtn>🔍</StSearchBtn>
        </StLogInDiv>
    </StHeaderWrapper>
  )
}

const StHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width : 100vw;
    min-width: 800px;
    height: 15vh;
    min-height: 150px;
    margin: 30px 0px;
`;

const StLogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 40px;
`;

const StImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 10px;
`; 

const StLogo = styled.h2`
    font-size: 28px;
    color: #cbcbca;
    letter-spacing: 3px;
`;

const StLogInDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 55vw;
    min-width: 500px;
    height: 50px;
    margin-right: 10%;
    background: #3B6591;
    background: rgb(59,101,145);
    background: -moz-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: -webkit-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: linear-gradient(to right, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
`;

const StBtn = styled.button`
    width: 100px;
    height: 100%;
    color: white;
    background-color: transparent;
    font-size: 15px;
    border: none;
    &:hover{
        background: #307FC0;
        cursor: pointer;
    }
`;

const StSearchInput = styled.input`
    position: absolute;
    right: 5px;
    width: 50%;
    max-width: 400px;
    height: 25px;
    margin: 5px;
    padding: 5px;
    background-color: #316282;
    color: white;
    border: 2px solid #314e73;
    border-radius: 5px;
    &:hover{
        border: 2px solid #63b5e4;
    }
`;

const StSearchBtn = styled.button`
    position: absolute;
    right: 12px;
    top: 8px;
    width: 33px;
    height: 33px;
    background-color: #549bc7;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.6);
    &:hover{
        cursor: pointer;
        background-color: #63b5e4;
    }
    
`;

export default Header;
