import React from "react"
import styled from "styled-components";
import "../App.css";
import { Link } from 'react-router-dom';
// import components
import Header from '../components/Header';
import RankContainer from "../components/RankContainer";
import CardContainer from "../components/CardContainer";


export const Home = () => {

  return (
    <StHomeWrap>
      <Header/>
      <StTitle>Best Games</StTitle>
      <RankContainer/>
      <StTitle>Game Reviews</StTitle>
      <CardContainer/>
      <Link to={"/aboutus"}><StBtn>Team <br/>No Sleep <br/>🌙</StBtn></Link>
    </StHomeWrap>
  )
}

const StHomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
`;

const StTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

const StBtn = styled.button`
  position: fixed;
  right: 15px;
  bottom : 15px;
  width: 75px;
  height: 75px;
  background-color: black;
  color: white;
  font-family: "Aboutus";
  font-size: 12px;
  border-radius:50%;
  box-shadow: 0px 0px 5px white;
  transition: 0.3s ease-in-out;
  &:hover{
    transform: translateY(-5px);
    cursor: pointer;
    box-shadow: 0px 0px 10px white;
  }
`

export default Home;