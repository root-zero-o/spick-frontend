import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import image
import logo from "../images/logo.png";
// import middleware
import { __login } from '../redux/modules/user';

// 비밀번호 틀릴시 css 미구현

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_email = useRef(null);
  const user_pw = useRef(null);

  const login= ()=>{
    dispatch(__login({
      username:user_email.current.value,
      password:user_pw.current.value,
    }))
    navigate("/");
  }

  const moveHome=()=>{
    navigate("/");
  }

  const moveSign=()=>{
    navigate("/signup");
  }

  return (
    <StBack>
      <StLoginBox onSubmit={login}>
        <StLoginHead>Spick Login</StLoginHead>
        <StBoxLogo><StLogo src = {logo}/>
          <StLogoName>SPICK</StLogoName>
        </StBoxLogo>
        <StBox>
          <StLogId>Account ID </StLogId>
          <Stinput ref={user_email}/>
        </StBox>
        <StBox>
          <StLogId >Password </StLogId>
          <Stinput type="password" ref={user_pw}/>
        </StBox>
        <StButtons>
          <StLoginButton type="submit">LogIn</StLoginButton>
          <StCancelButton onClick={moveHome}>Cancel</StCancelButton>
        </StButtons>
        <StBar/>
        <StSignBox>
          <StGuide>If you don't have Spick Account </StGuide>
          <StSignButton onClick={moveSign}>Make new account</StSignButton>
        </StSignBox>
      </StLoginBox>
    </StBack>
  )
}

const StSignBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const StGuide = styled.p`
  margin:0 1rem 0 0;
  color:#cbcbca;
  font-size: 12px;
`;
const StSignButton = styled.div`
  width: 10rem;
  height:1.3rem;
  margin : 0 0 0 0 ;
  background: #434953;
  color:#cbcbca;
  background: -moz-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
  background: -webkit-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
  background: linear-gradient(to bottom, #434953 0%, #3A3F47 52%, #33383E 100%);
  font-size: 12px;
  text-align: center;
  border: none;
  cursor: pointer;
  &:hover{
    background: #2A2E33;
    background: -moz-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
    background: -webkit-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
    background: linear-gradient(to bottom, #2A2E33 0%, #2E3238 61%, #32373D 100%);
  }
`;

const StCancelButton = styled.div`
 width :8rem;
 height:1.3rem;
 margin-left:1rem;
 background: #434953;
 color:#cbcbca;
 background: -moz-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
 background: -webkit-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
 background: linear-gradient(to bottom, #434953 0%, #3A3F47 52%, #33383E 100%);
 font-size: 12px;
 text-align: center;
 border: none;
 cursor: pointer;
 &:hover{
   background: #2A2E33;
   background: -moz-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
   background: -webkit-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
   background: linear-gradient(to bottom, #2A2E33 0%, #2E3238 61%, #32373D 100%);
  }
`;

const StLoginButton = styled.button`
  width: 8rem;
  height:1.3rem;
  margin-left: 22.5%;
  background: #434953;
  background: -moz-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
  background: -webkit-linear-gradient(top, #434953 0%, #3A3F47 52%, #33383E 100%);
  background: linear-gradient(to bottom, #434953 0%, #3A3F47 52%, #33383E 100%);
  color:#cbcbca;
  text-align: center;
  font-size: 12px;
  border: none;
  cursor: pointer;
  &:hover{
    background: #2A2E33;
    background: -moz-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
    background: -webkit-linear-gradient(top, #2A2E33 0%, #2E3238 61%, #32373D 100%);
    background: linear-gradient(to bottom, #2A2E33 0%, #2E3238 61%, #32373D 100%);
  }
`;

const StBar = styled.div`
  width: 80%;
  height:1px;
  margin:1rem 0 1rem 0;
  background-color:#434a52 ;
`;
const StBack= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
`;
const StLogoName =styled.p`
  margin-left:0.6rem;
  color:#cbcbca;
  font-size: 1.3rem;
`;
const StLogo = styled.img`
  width :2rem;
  height : 2rem;
`;
const StBoxLogo = styled.div`
  display: flex;
  margin:0 0 5% 15%;
`;
const StBox = styled.div`
  display: flex;
  margin: 3% 0 0 10%;
`;
const StButtons = styled.div`
    display: flex;
    margin: 10% 0 0 10%;
`;
const Stinput = styled.input`
    width: 17rem;
    background: #2A2E33;
    border-color: #4B5466;
    color:#cbcbca;
    opacity: 1;
    border-width: 0.5px;
`;
const StLogId = styled.p`
    display: flex;
    justify-content: center;
    width:6rem;
    color :#cbcbca;
`;
const StLoginHead = styled.div`
  height:2rem;
  margin : 2% 0 0 2%;
  color:#cbcbca;
  font-size: 13px;
`;
const StLoginBox = styled.form`
    width :30rem;
    height : 20rem;
    min-width: 30rem;
    min-height: 20rem;
    background: #23272C;
    background: -moz-linear-gradient(top, #23272C 0%, #2A2E33 52%, #383D43 100%);
    background: -webkit-linear-gradient(top, #23272C 0%, #2A2E33 52%, #383D43 100%);
    background: linear-gradient(to bottom, #23272C 0%, #2A2E33 52%, #383D43 100%);
    border:1px solid #16191C;
`;
export default Login