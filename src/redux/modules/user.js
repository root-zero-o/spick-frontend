import axios from 'axios';
import React from 'react'
import { setCookie , getCookie} from '../../Cookie';
import { useSelector } from 'react-redux';

const initialState = {
  user:[],
  login:false,
  error:false,
  loading:false,
  idcheck:true,
  nickcheck:true,
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
  console.log(payload)
  return async function(dispatch,getState){
    const idcheck = await axios({
      method:"post",
      url : "",
      data:{
        username:payload.username,
      }
    });
    dispatch(IdCheck(idcheck.data));
  }
}

export const __nickCheck = (payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
    const nickcheck = await axios({
      method:"get",
      url : "",
    });
    dispatch(NickCheck(nickcheck.data));
  }
}

export const __signUp=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
    // dispatch()
    dispatch(serverReq(true));
    console.log("1")
    try{
      console.log("2")
      const signup = await axios({
        method:"post",
        url : "http://3.39.190.102:8080/api/signup",
        data : {
          username : payload.username,
          password : payload.password,
          nickname : payload.nickname,
          passwordCheck : payload.passwordCheck,
        }
       })
       console.log("3")
       console.log(signup.data)
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
  console.log(payload)
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
   console.log(login)
   const accessToken=login.headers.authorization;
   setCookie("token",accessToken);
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