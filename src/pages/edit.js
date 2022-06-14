import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
// import component
import Header from '../components/Header';
import EditBox from '../components/EditBox';
// import middleware
import { getPostsDB } from "../redux/modules/post"

const Edit = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.post.loading)

  useEffect(() => {
    dispatch(getPostsDB())
  },[])
  
  return (
    <StEditWrap>
      {isLoading ? (
        <StLoadingBox>Loading..</StLoadingBox>
        ) : 
        (<StLoadingBox style={{display: "none"}}/>)
      }
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

export const StLoadingBox = styled.div`
  display: flex;
  width: 100vw; 
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  color: white;
`;


export default Edit;