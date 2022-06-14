import axios from 'axios';
import React from 'react'
import { setCookie , getCookie} from '../../Cookie';
import { useSelector } from 'react-redux';

const initialState = {
  user:[],
  login:false,
  error:false,
  loading:false,
}

const SERVER_REQ="user/SERVER_REQ"  // loading check
const REQ_SUCCESS="user/REQ_SUCCESS"; // login check
const REQ_ERROR="user/REQ_ERROR"; // error check
const LOGIN = "user/LOGIN"; // login post
const SIGNUP = "user/SIGNUP"; // signup post
const IDCHECK = "user/IDCHECK"; // id check
const NICKCHECK = "user/NICKCHECK"; // id check

export function serverReq(payload){
  return{type:SERVER_REQ,payload}
}
export function reqSucess(payload){
  return{type:REQ_SUCCESS,payload}
}
export function reqError(payload){
  return{type:REQ_ERROR,payload}
}
export function Login(payload){
  return{ type:LOGIN,payload}
}
export function SignUp(payload){
  return{type:SIGNUP,payload}
}
export function IdCheck(payload){
  return{type:IDCHECK,payload}
}
export function NickCheck(payload){
  return{type:NICKCHECK,payload}
}

export const __idCheck = (payload)=>{
  return async function(dispatch,getState){
    dispatch(serverReq(true))
    try{
      const idcheck = await axios({
        method:"post",
        url : "http://3.39.190.102:8080/api/checkId",
        data:{
          username:payload.username,
        }
      });
      // dispatch(IdCheck(idcheck.headers.Username));
      {(idcheck.data)?
      (alert("You can use this email!")):(alert("Already Existing Email!!!!"))}
    }
    catch(error){
      dispatch(reqError(true));
      alert("Nope");
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}

export const __nickCheck = (payload)=>{

  return async function(dispatch,getState){
    try{
    const nickcheck = await axios({
      method:"post",
      url : "http://3.39.190.102:8080/api/checkNick",
      data :{
        nickname:payload.nickname,
      }
    });
    {(nickcheck.data)?
    (alert("You can use this email!")):(alert("Already Existing Nickname!!!!"))}
  }
  catch(error){
    dispatch(reqError(true));
    alert("Nope");
  }
  finally{
    dispatch(serverReq(false))
  }
  }
}

export const __signUp=(payload)=>{
  return async function(dispatch,getState){
    // dispatch()
    dispatch(serverReq(true));
    try{
      console.log(payload);
      const signup = await axios({
        method:"post",
        url : "http://3.39.190.102:8080/api/signup",
        data : {
          username : payload.username,
          password : payload.password,
          nickname : payload.nickname,
          passwordCheck : payload.passwordCheck,
          user_picURL : payload.user_picURL

        }
       })

    }catch(error){
      console.log(error);
      dispatch(reqError(true));
      alert("SignUp Error");
    }finally{
      dispatch(serverReq(false));
    }
  }
}

export const __login=(payload)=>{
  return async function(dispatch,getState){
    try{
      dispatch(serverReq(true));
   const login = await axios({
    method:"post",
    url : "http://3.39.190.102:8080/api/login",
    data : {
      username:payload.username,
      password:payload.password,
    }
   })

   const accessToken=login.headers.authorization;
   setCookie("token",accessToken);
   setCookie("user_id",login.headers.username);
   setCookie("user_nick",login.headers.nickname);
   setCookie("user_pic",login.headers.user_picurl);
   dispatch(reqSucess(true));
   alert("Hello!!");
    }catch(error){
      console.log(error);
      dispatch(reqError(true));
      alert("Check your ID and Password");
    }finally{
      dispatch(serverReq(false));
    }
  }
}


function user(state=initialState,action){
  switch(action.type){
    case REQ_SUCCESS:{
      return{...state,login:action.payload};
    }
    case REQ_ERROR:{
      return{...state,error:action.payload}
    }
    case SERVER_REQ:{
      return{...state,loading:action.payload}
    }
    case IDCHECK:{
      return{...state,idcheck:action.payload}
    }
    case NICKCHECK:{
      return{...state,nickcheck:action.payload}
    }
    default:
      return{...state};
  }
}
export default user;