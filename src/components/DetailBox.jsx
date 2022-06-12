/* IMPORT */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import middleware
import { getPostsDB } from '../redux/modules/post';


// detail 페이지에서 해당 게시글 정보가 담기는 컴포넌트
const DetailBox = () => {

  const dispatch = useDispatch();
  const postId = useParams().id;

  useEffect(() => {
    dispatch(getPostsDB())
  },[])

  const postList = useSelector(state => state.post.list)
  const post = postList.find(value => postId === String(value.id));
  console.log(post)

  return (
    <StDetailContainer>
      <StDetailBox>
        <h2 style={{color:"white"}}>{post.board_title}</h2>
        <StDiv>
          <StImg src={post.board_imgURL}></StImg>
          <StContentBox>
            <StUserBox>
              <StUserImg src={post.user_picURL}></StUserImg>
              <span style={{fontWeight:"bold"}}>{post.nickname}</span>
            </StUserBox>
            <div style={{height:"90%"}}>
              <span style={{color:"white"}}>{post.board_text}</span>
            </div>
            <div style={{height:"10%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <StLikeBox>좋아요 {post.like}개</StLikeBox>
              <StLikeBox>댓글 0개</StLikeBox>
            </div>
          </StContentBox> 
        </StDiv>   
        </StDetailBox>
    </StDetailContainer>
  )
}

/* STYLED-COMPONENTS */

const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StDetailBox= styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
`;

const StDiv = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10px;
  background: rgb(38,57,75);
  background: linear-gradient(135deg, rgba(38,57,75,1) 0%, rgba(21,27,31,1) 100%);
`;

const StImg = styled.img`
  width: 500px;
  height: 100%;
`;

const StContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px;
`;

const StUserBox = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  margin: 20px;
  color: white;
`;

const StUserImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const StLikeBox = styled.div`
  width: 100px;
  height: 25px;
  margin: 0px 5px;
  background-color: #2b4553;
  color: #46a1d9;
  text-align: center;
  font-weight: bold;
  border-radius: 3px;
`;


export default DetailBox;
