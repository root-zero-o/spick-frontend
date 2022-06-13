import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
// import component
import Header from '../components/Header';
import EditBox from '../components/EditBox';
// import middleware
import { getPostsDB } from "../redux/modules/post"

const Edit = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsDB())
  },[])
  
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