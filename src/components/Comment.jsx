/* IMPORT */
import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { getCookie } from '../Cookie';
import { __postComment,__editComment } from '../redux/modules/comment';

// 댓글 박스 하나 나타내는 컴포넌트!

 const Comment = (props) => {
    const loginId = getCookie("user_id");
    const dispatch = useDispatch();
    const text = useRef(null);
    const board_id = useParams().id;
    const [commenting,setCommenting]=useState(true);
    const [editCheck , setEditCheck]=useState(false);
    
    const edit=()=>{
        setEditCheck(true);
        dispatch(__editComment({
            reply_id:props.user_id,
            reply_nickname:props.user_nick,
            reply_picURL:props.user_pic,
            reply_text:text.current.value,
            board_id:props.board_id,
        }))
    }
    
    const delet=()=>{
        
    }

    const submit=(text,board_id)=>{
        dispatch(__postComment({
            reply_id:props.user_id,
            reply_nickname:props.user_nick,
            reply_picURL:props.user_pic,
            reply_text:text.current.value,
            board_id:props.board_id,
        }))
    }
    // key = {index}
    // id={value.id} 
    // comment={value.reply_text} 
    // user_id={value.reply_id} 
    // user_pic={value.reply_picURL}
    // user_nick={value.reply_nickname}/>

    console.log(props);
  return (
    <>
    {props.user_id==loginId?(
    <>
        {editCheck ? 
        (<StCommentBox>
            <StUserBox><StUserPic src={props.user_pic}/><StUserNick><strong>{props.user_nick}</strong></StUserNick></StUserBox>
            <StInputBox type="text" value={props.comment} ref={text}/*onChange={(event)=>setCommenting(event.target.value)}*//>
            <StButton onClick={()=>{submit(text,board_id)}}>Submit</StButton>
        </StCommentBox>):
        (<StCommentBox>
            <StUserBox><StUserPic src={props.user_pic}/><StUserNick><strong>{props.user_nick}</strong></StUserNick></StUserBox>
            <StTextBox>{props.comment}</StTextBox>
                <StButtons>
                    <StButton onClick={edit}>Edit</StButton>
                    <StButton onClick={delet}>Delete</StButton>
                </StButtons>
        </StCommentBox>)}
        </>):
        (<>
        <StCommentBox>
            <StUserBox><StUserPic src={props.user_pic}/><StUserNick><strong>{props.user_nick}</strong></StUserNick></StUserBox>
            <StTextBox>{props.comment}</StTextBox>
        </StCommentBox>
        </>)
    }
    </>
  )
}

/* STYLED-COMPONENTS */


const StButton=  styled.button`
    width:5rem;
    height:2rem;
    margin: 9px 0 9px 1rem;
    text-align: center;
    background-color: #2b4553;
    color: #46a1d9;
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

const StButtons=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StUserNick=styled.p`
    width:5rem;
    height:2rem;
    margin:0 0 0 1rem;
    font-size: 0.8rem;
    color:#7f98af;
    text-align: center;
    font-weight: 10rem;
`;

const StUserPic=styled.img`
    width:4.5rem;
    height: 4.5rem;
    background-color: yellow;
    margin:0 0 0.05rem 0.7rem;
    
`;

const StUserBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.5rem;
    height:8rem;
    margin: 3.5rem 0 0 1rem;
`;

const StInputBox=styled.input`
    width:500px;
    height:8rem;
    margin:0 0 0 3rem;
    background-color: tomato;
    color: white;
`;


const StTextBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width:500px;
    height:8rem;
    margin:0 0 0 3rem;
   // background-color: 
`;

const StCommentBox=styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    height: 8rem;
    margin: 1rem 0 0 0;
    background-color: rgba(39,65,86,255);
    border-top: 2px solid #264357;
`;


export default Comment;
