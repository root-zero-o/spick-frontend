/* IMPORT */
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
// import Cookie
import { getCookie } from '../Cookie';
// import middleware
import { __editComment, __deleteComment } from '../redux/modules/comment';

// 댓글 박스 하나 나타내는 컴포넌트!

 const Comment = (props) => {
    const loginId = getCookie("user_nick");
    const dispatch = useDispatch();
    const text = useRef(null);
    const board_id = useParams().id;
    const [editCheck , setEditCheck]=useState(false);
    
    const time = props.createAt;
    let day = time.split('T');
     console.log(day);
     let hour = day[1].split(':')
    // console.log(hour[0]);
     let khour = Number(hour[0])+9;
    // console.log(khour);
     hour[0]=String(khour);
     day[1] = hour.join(":")
     
    let a = day[1].split(":");
    let k = a.slice(0,2);
    day[1] = k.join(":")
    console.log(day[1])
    console.log(day[0]+ " "+day[1])
    let timed = day.join(" ");
    console.log(timed)

    const edit=()=>{
        setEditCheck(true);
    }
    
    const delet=()=>{
        dispatch(__deleteComment({
            reply_id:props.id,
            board_id:props.board_id}))
      //  alert("Comment has been deleted!")
    }

    const submit=(text)=>{
        dispatch(__editComment({
            reply_id:props.id,
            reply_nickname:props.user_nick,
            reply_picURL:props.user_pic,
            reply_text:text.current.value,
            board_id:props.board_id,
        }))
        alert("댓글 수정 완료!")
        window.location.reload();
    }


  return (
    <>
    {props.user_nick == loginId ? (
    <>
        {editCheck ? 
        (<StCommentBox>
            <StUserBox>
                <StUserPic src={props.user_pic}/>
                <StUserNick><strong>{props.user_nick}</strong></StUserNick>
            </StUserBox>
            <StInputBox type="text" ref={text} defaultValue={props.comment}/>
            <StButton onClick={()=>{submit(text,board_id)}}>Submit</StButton>
        </StCommentBox>):
        (<StCommentBox>
            <StUserBox>
                <StUserPic src={props.user_pic}/>
                <StUserNick><strong>{props.user_nick}</strong></StUserNick>
            </StUserBox>
            <StTextBox>{props.comment}</StTextBox>
            <StTime>{timed}</StTime>
            <StButtons>
                <StButton onClick={edit}>Edit</StButton>
                <StButton onClick={delet}>Delete</StButton>
            </StButtons>
        </StCommentBox>)}
    </>):
        (<>
        <StCommentBox>
            <StUserBox>
                <StUserPic src={props.user_pic}/>
                <StUserNick><strong>{props.user_nick}</strong></StUserNick>
            </StUserBox>
            <StTextBox>{props.comment}</StTextBox>
            <StTime>{timed}</StTime>
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
    background: #2C465B;
background: -moz-linear-gradient(-45deg, #2C465B 0%, #2C465B 50%, #2A4559 100%);
background: -webkit-linear-gradient(-45deg, #2C465B 0%, #2C465B 50%, #2A4559 100%);
background: linear-gradient(135deg, #2C465B 0%, #2C465B 50%, #2A4559 100%);;
    color: #46a1d9;
    text-align: center;
    border:none;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover{
        background: #66BFF2;
        background: -moz-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
        background: -webkit-linear-gradient(left, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
        background: linear-gradient(to right, #66BFF2 0%, #549EC9 50%, #417A9B 100%);
        color:white;   
    }
`;

const StButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StUserNick = styled.p`
    width: 5rem;
    height: 2rem;
    margin: 0 0 0 1rem;
    color: #7f98af;
    font-size: 0.8rem;
    font-weight: 10rem;
    text-align: center;
`;

const StUserPic = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    background-color: yellow;
    margin: 0 0 0.05rem 0.7rem;
`;

const StUserBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.5rem;
    height:8rem;
    margin: 3.5rem 0 0 1rem;
`;

const StInputBox=styled.input`
    width:500px;
    height:7rem;
    margin:0 0 0 3rem;
    background-color: #264357;
    color: white;
`;


const StTextBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width:350px;
    height:8rem;
    margin:0 0 0 3rem;
    font-size:1rem;
    color:white;
    //background-color: tomato;
`;

const StTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color : white;
    font-size:0.7rem;
    margin : 0 0 0 1rem;
    width:150px;
    height:8rem;
    margin:0 0 0 1rem;
    text-align: center; 
   // background-color: yellow;
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
