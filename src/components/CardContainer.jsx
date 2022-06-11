/* IMPORT */
import React from 'react'
// import components
import Card from "./Card";
import {StContainer} from "./StyleG";

// home 화면 카드들 map 돌리는 컴포넌트

export const CardContainer = () => {
  return (
    <StContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </StContainer>
  )
}

export default CardContainer;
