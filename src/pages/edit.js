import React from 'react'
import styled from 'styled-components'
// import component
import Header from '../components/Header';
import EditBox from '../components/EditBox';

const Edit = () => {
  return (
    <StEditWrap>
      <Header/>
      <EditBox/>
    </StEditWrap>
  )
}

const StEditWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
`;

export default Edit;