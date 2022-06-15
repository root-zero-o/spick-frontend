/* IMPORT */
import React,{ useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
// import components
import styled from "styled-components";
// import image
import logo from "../images/logo.png";
// import Router
import { Link } from 'react-router-dom';
// import middleware
import { __IsLogin, __IsLogout } from "../redux/modules/user";

// 헤더
const Header = () => {

    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.user.isLogin) 

    useEffect(() => {
        dispatch(__IsLogin())
      },[dispatch, isLogin])

    const onLogOutHandler = () => {
        dispatch(__IsLogout());
        alert("로그아웃 되었습니다!")
    }

  return (
    <StHeaderWrapper>
        <StLink to={'/'}>
            <StLogoDiv>
                <StImg src={logo}/>
                <StLogo>SPICK</StLogo>
            </StLogoDiv>
        </StLink>
        <StLogInDiv>
            { isLogin ? (
                <>
                    <Link to={'/input'}><StBtn>글쓰기</StBtn></Link>
                    <StBtn onClick={onLogOutHandler}>로그아웃</StBtn>
                </>
            ) : (
                <>
                    <Link to={'/login'}><StBtn>로그인</StBtn></Link>
                    <Link to={'/signup'}><StBtn>회원가입</StBtn></Link>
                </>
            )}
            
            <StSearchInput placeholder="검색하기"/>
            <StSearchBtn>🔍</StSearchBtn>
        </StLogInDiv>
    </StHeaderWrapper>
  )
}

/* STYLED-COMPONENTS */

const StHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 1100px;
    min-width: 800px;
    height: 15vh;
    min-height: 150px;
    margin: 30px 0px;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    margin: 30px;
`;

const StImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;
`; 

const StLogo = styled.h2`
    color: #cbcbca;
    font-size: 35px;
    letter-spacing: 3px;
`;

const StLogInDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 70vw;
    min-width: 500px;
    height: 50px;
    margin-right: 7%;
    background: #3B6591;
    background: rgb(59,101,145);
    background: -moz-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: -webkit-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: linear-gradient(to right, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
`;

const StBtn = styled.button`
    width: 90px;
    height: 100%;
    background-color: transparent;
    color: white;
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
    width: 40%;
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
