import React from "react"
import styled from "styled-components";
//import components
import Header from '../components/Header';
import RankContainer from "../components/RankContainer";

export const Home = () => {
  return (
    <StHomeWrap>
        <Header/>
        <StTitle>Best Games</StTitle>
        <RankContainer/>
    </StHomeWrap>
  )
}

const StHomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

export default Home;