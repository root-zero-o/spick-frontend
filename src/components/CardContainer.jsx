import React from 'react'
// import styled-components
import {StContainer} from "./StyleG";
// import components
import Card from "./Card";

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
