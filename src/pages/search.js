import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
//import Component
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import { StContainer } from "../components/StyleG";


const Search = () => {

  const searchNum = useSelector(state => state.search.num)
  const searchWordArr = useSelector(state => state.search.word)
  const searchWord = searchWordArr.join("")

  return (
    <StContainer>
      <Header/>
      <StH2>"{searchWord}"에 대한 검색결과 {searchNum}건</StH2>
      <SearchBox/>
    </StContainer>
  )
}

const StH2 = styled.h2`
  color: white;
  margin: 20px 0px;
  font-size: 30px;
`;

export default Search