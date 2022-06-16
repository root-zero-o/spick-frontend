import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { __postComment } from '../redux/modules/comment';
import { getCookie } from '../Cookie';
import { useGetPosts } from '../Hooks/useGetPosts';

const Commenting = ({board_id}) => {
   
    const dispatch=useDispatch();
    const reply_text=useRef(null);
    const postId = Number(useParams().board_id);

    const {data} = useGetPosts();
    const board = data?.find(value=>value.board_id == postId)
    const board_title = board?.board_title;
   
    const submit=()=>{
        dispatch(__postComment({
            reply_text: reply_text.current.value,
            board_id:board_id,
        }))
        alert("댓글이 등록되었습니다.");
        window.location.reload();
    }
    
    const user_nick = getCookie("user_nick");
    const user_pic = getCookie("user_pic");
    
  return (
    <StCommentBox> 
        <StTitle> {board_title} 제품에 대한 평가 작성</StTitle>
        <StBody>
            <StUserBox>
                <StUserPic src={user_pic}/>
                <StUserNick>{user_nick}</StUserNick>
            </StUserBox>
            <StInputBox ref={reply_text}/>
           <StSubmitButton onClick={submit}>Submit</StSubmitButton>:   
        </StBody>
    </StCommentBox>
  )
}

const StUserNick=styled.p`
    width:5rem;
    height:2rem;
    margin:0 0 0 1rem;
    font-size: 0.8rem;
    color:#7f98af;
    text-align: center;
`;

const StUserPic=styled.img`
    width:4.5rem;
    height: 4.5rem;
    background-color: yellow;
    margin:0 0 0.05rem 0.7rem;
`;

const StTitle =styled.div`
width: 100%;
font-size: 1.2rem;
color:#57beed;
`;

const StBody =styled.div`
height: 10rem;
display: flex;
align-items: center;
`;


const StUserBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.5rem;
    height:8rem;
    margin: 2.5rem 1.5rem 0 1rem;
`;

const StSubmitButton = styled.button`
    width:5rem;
    height:2rem;
    margin:0 1rem 0 1rem;
    background-color: #98bbcf;
    color: #727da6;
    border:none;
    border-radius: 0.3rem;
    &:hover{
        background: #66BFF2;
background: -moz-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
background: -webkit-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
background: linear-gradient(to right, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
    color:white;
}
    cursor: pointer;
`;

const StInputBox = styled.textarea`
    width:500px;
    height:7rem;
    padding: 0.5rem;
    margin:0 0 0 1rem;
    background-color: #222b35;
    color:white;
`;

const StCommentBox=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    width: 800px;
    height: 12rem;
    margin: 10px 0px;
    background: #313B46;
background: -moz-linear-gradient(-45deg, #313B46 0%, #414D5A 51%, #576674 100%);
background: -webkit-linear-gradient(-45deg, #313B46 0%, #414D5A 51%, #576674 100%);
background: linear-gradient(135deg, #313B46 0%, #414D5A 51%, #576674 100%);
    border-top: 2px solid #264357;
`;


export default Commenting