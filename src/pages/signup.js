import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { useRef } from 'react';
import { __signUp, __loadUser, __idCheck } from '../redux/modules/user';
import "./signup.css";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_profile =useRef(null);
  const user_email = useRef(null);
  const user_nickname = useRef(null);
  const password = useRef(null);
  const passwordCheck = useRef(null);
  const idcheck = useSelector(state=>state.user.idcheck);
  const nickcheck = useSelector(state=>state.user.nickcheck);


  const moveLog=()=>{
    navigate("/login");
  }

  const submit=()=>{
    dispatch(__signUp({
      username : user_email.current.value,
      password : password.current.value,
      nickname : user_nickname.current.value,
      passwordCheck : passwordCheck.current.value,
    }))
    navigate("/");
  }

  const emailCheck=()=>{
    dispatch(__idCheck({
      username : user_email.current.value,
    }))
  }

  const nickCheck=()=>{
    dispatch(__idCheck({
      username : user_nickname.current.value,
    }))
  }


  return (
   <StBack>
    <StSignBox>
      <StHeader> NewAccount</StHeader>
    <StBox>
    <StInBox>
      <StTitle>New Account</StTitle>
      <StEmail>Profile Photo</StEmail>
      <StPhoto>
      {/* <div class="filebox">
      <label for="ex_file">업로드</label>
      <input type="file" id="ex_file"/>
      </div> */}
      <br/>
      </StPhoto>
      <Box>
        <StEmail>Email Adress</StEmail>
        <CheckBox>
          <StInput placeholder='aaa@aaa.aaa' ref={user_email}/>
          <IdCheckButton onClick={emailCheck}>Email Check</IdCheckButton>
        </CheckBox>
      </Box>
      <Box>
          <StEmail>Steam Account name</StEmail>
          <CheckBox>
            <StInput placeholder='Luke' ref={user_nickname}/>
            <IdCheckButton onClick={nickCheck}>Nick Check</IdCheckButton>
          </CheckBox>      
      </Box>
      <Box>
        <StEmail>Password</StEmail>
        <StInput type="password" ref={password}/>
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

const StPhoto = styled.div`
margin: 0 0 0 10%;
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