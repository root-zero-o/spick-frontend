import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from 'react-redux/es/exports';
import { useRef } from 'react';
import { __signUp, __loadUser, __idCheck, __nickCheck } from '../redux/modules/user';
import "./signup.css";
import { storage } from "../shared/firebase";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_profile =useRef(null);
  const user_email = useRef(null);
  const user_nickname = useRef(null);
  const password = useRef(null);
  const passwordCheck = useRef(null);

  const [fileView, setFileView] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileURL, setFileURL] = useState("");

  // 로그인 페이지로 가기
  const moveLog=()=>{
    navigate("/login");
  }

  // 회원가입 입력 정보 보내기
  const submit=()=>{
    dispatch(__signUp({
      username : user_email.current.value,
      password : password.current.value,
      nickname : user_nickname.current.value,
      passwordCheck : passwordCheck.current.value,
      user_picURL : fileURL,
    }))
    navigate("/login");
  }

  // 이메일 체크
  const emailCheck=()=>{
    dispatch(__idCheck({
      username : user_email.current.value,
    }))
  }

  // 닉네임 체크
  const nickCheck=()=>{
    dispatch(__nickCheck({
      nickname : user_nickname.current.value,
    }))
    if((user_nickname.current.value).length>6){
      alert("It's longer than 6 letters")
    }

  }

  // 이미지 업로드 onchange event
  const saveFileImage = (event) => {
    setFileView(window.URL.createObjectURL(event.target.files[0]));
    setFileUploaded(true);
    dispatch(uploadImgFB(event))
    window.URL.revokeObjectURL(fileView);
  }


  // 이미지 FB에 업로드하는 미들웨어
  const uploadImgFB = (event) => {
    return async function (dispatch){
      const uploaded_file = await uploadBytes(
        ref(storage, `images/${event.target.files[0].name}/`),
        event.target.files[0]
      );
      const file_url = await getDownloadURL(uploaded_file.ref);
      setFileURL(file_url);
    }
  }


  return (
   <StBack>
    <StSignBox>
      <StHeader> NewAccount</StHeader>
    <StBox>
    <StInBox>
      <StTitle>New Account</StTitle>
      <StEmail>Profile Photo</StEmail>
      <StPhotoBox>
      {fileUploaded ? (
            <StImg src={fileView}></StImg>) : 
            (<StImgBox><span>No Image :(</span></StImgBox>)}
            <StLabel htmlFor="file">Profile Photo</StLabel>
            </StPhotoBox>
      <input 
              type="file" 
              id="file" 
              accept="image/*" 
              style={{display:"none"}}
              onChange={saveFileImage}
              required/>
      <br/>
      
      <Box>
        <StEmail>Email Adress</StEmail>
        <CheckBox>
          <StInput placeholder='이메일 형식으로 입력해주세요' type="email" ref={user_email}/>
          <IdCheckButton onClick={emailCheck}>Email Check</IdCheckButton>
        </CheckBox>
      </Box>
      <Box>
          <StEmail>SPICK Account name</StEmail>
          <CheckBox>
            <StInput placeholder='6자 이하의 문자로 입력해주세요' max="6" ref={user_nickname}/>
            <IdCheckButton onClick={nickCheck}>Nick Check</IdCheckButton>
          </CheckBox>      
      </Box>
      <Box>
        <StEmail>Password</StEmail>
        <StInput type="password" ref={password} placeholder="소문자,숫자,특수문자를 포함한 8자 이상으로 입력해주세요"/>
      </Box>
      <Box>
        <StEmail>Password Check</StEmail>
        <StInput type="password" ref={passwordCheck}/><br/>
      </Box>
      <StSubmit onClick={submit}>Submit</StSubmit>
      <StCancel onClick={moveLog}>Cancel</StCancel>
    </StInBox>
    </StBox>
    </StSignBox>
   </StBack>
  )
}

const StPhotoBox=styled.div`
  display: flex;
  align-items: center;
`;

const StLabel = styled.label`
  display: block;
  background: rgb(79,200,47);
  width: 10rem;
  height : 1rem;
  margin:0 0 0 1rem;
  padding: 10px;
  background: linear-gradient(135deg, rgba(79,200,47,1) 0%, rgba(25,177,78,1) 79%);
  color: white;
  text-align: center;
  &:hover{
    background: #53d432;
    cursor: pointer;
  }
`;

 const StImg = styled.img`
  width: 5rem; 
  height: 5rem;
  margin : 0 0 0 4rem;
`;

const StImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 0 0 4rem;
  width: 5rem;
  height: 5rem;
  background-color: #142231;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;


const CheckBox=styled.div`
display: flex;
height:2rem;
margin:0.5rem 0 0 0;
`;

const Box=styled.div`
height:5rem;
`;

const IdCheckButton=styled.button`
  width:5rem;
  height:2rem;
  margin : 0 0 0 0.5rem;
  background: #3DA2F1;
  border-radius: 2px;
background: -moz-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: -webkit-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: linear-gradient(to right, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
border: none;
text-align: center;
color:white;
&:hover{
  background: #47BFFF;
background: -moz-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: -webkit-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: linear-gradient(to right, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
}
cursor: pointer;
`;


const StSubmit = styled.button`
  width:10rem;
  height:2rem;
  margin : 0 0 0 10%;
  background: #3DA2F1;
  border-radius: 2px;
background: -moz-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: -webkit-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: linear-gradient(to right, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
border: none;
text-align: center;
color:white;
&:hover{
  background: #47BFFF;
background: -moz-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: -webkit-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: linear-gradient(to right, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
}
cursor: pointer;
`;

const StCancel = styled.button`
  width:10rem;
  height:2rem;
  margin : 0 0 0 10%;
  background: #3DA2F1;
  border-radius: 2px;
background: -moz-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: -webkit-linear-gradient(left, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
background: linear-gradient(to right, #3DA2F1 0%, #3184E1 44%, #2460D0 100%);
border: none;
text-align: center;
color:white;
&:hover{
  background: #47BFFF;
background: -moz-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: -webkit-linear-gradient(left, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
background: linear-gradient(to right, #47BFFF 0%, #3EA8F3 50%, #3287E3 100%);
}
cursor: pointer;
`;

const StInput = styled.input`
  margin: 0 0 5% 10%;
  width:20rem;
  height:2.1rem;
  background-color: #32353C;
  border:none;
  color:white;
  font-size: 12px;
`;
const StEmail = styled.div`
  margin:0 0 0 10%;
  color:#cbcbca;
font-size:14px;
`;
const StTitle = styled.p`
  margin: 10% 0 7% 10%;
  font-size: 2.5rem;
  color:white;
`;
const StBox = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
`;
const StInBox = styled.div`
  width:39rem;
  height:45.5rem;
  margin:2rem 0 0 0;
  background-color: #212429;
  /* border-color: #16191C; */
  border:2px solid #16191C;
`;
const StHeader = styled.p`
color:#cbcbca;
font-size:12px;
margin:0 0 0 0;
`;
const StSignBox =styled.div`
  width:41rem;
  height:50rem;
  min-height: 50rem;
  min-width: 41rem;
  background: #212934;
background: -moz-linear-gradient(top, #212934 0%, #272B30 57%, #2A2E33 100%);
background: -webkit-linear-gradient(top, #212934 0%, #272B30 57%, #2A2E33 100%);
background: linear-gradient(to bottom, #212934 0%, #272B30 57%, #2A2E33 100%);
border:1px solid #16191C;
`;
const StBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Signup