import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { useDispatch } from 'react-redux';
// import components
import Header from '../components/Header';
import RankContainer from "../components/RankContainer";
import CardContainer from "../components/CardContainer";
// import Cookie
import { getCookie }   from '../Cookie';



export const Home = () => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if(token){
      setIsLogin(true)
    }
  },[])

  return (
    <StHomeWrap>
      <Header isLogin={isLogin}/>
      <StTitle>Best Games</StTitle>
      <RankContainer/>
      <StTitle>Game Reviews</StTitle>
      <CardContainer/>
    </StHomeWrap>
  )
}

const StHomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const StTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

export default Home;