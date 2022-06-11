import axios from 'axios';
import React from 'react'
import { setCookie , getCookie} from '../../Cookie';
const initialState = {
  user:[],
  login:false,
  error:false,
}
const SERVER_REQ="user/SERVER_REQ"
const REQ_SUCCESS="user/REQ_SUCCESS";
const REQ_ERROR="user/REQ_ERROR";
const LOGIN = "user/LOGIN";
const SIGNUP = "user/SIGNUP";
export function serverRequest(payload,getState){
  return{type:SERVER_REQ,payload}
}
export function reqSucess(payload,getState){
  return{type:REQ_SUCCESS,payload}
}
export function reqError(payload,getState){
  return{type:REQ_ERROR,payload}
}
export function Login(payload,getState){
  return{ type:LOGIN,payload}
}
export function SignUp(payload,getState){
  return{type:SIGNUP,payload}
}
export const __signUp=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
    // dispatch()
   const signup = await axios({
    method:"post",
    url : "http://localhost:4000/posts",
    data : {
      username : payload.username,
      password : payload.password,
      nickname : payload.nickname,
    }
   })
   ;
  }
}
export const __loadUser=(payload)=>{
  return async function(dispatch,getState){
    fetch("https://reqres.in/api/login", {
      method: "POST", // POST
      headers: { // 헤더 조작
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ // 자바스크립트 객체를 json화 한다.
        email: payload.value,
        password: payload.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
}
export const __login=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
    dispatch(serverRequest(true));
    try{
   const login = await axios({
    method:"post",
    url : "http://3.39.190.102:8080/posts",
    data : {
      username:payload.username,
      password:payload.password,
    }
   })
   const accessToken=login.data.token;
   setCookie("token",accessToken);
   dispatch(reqSucess(true));
    }catch(error){
      console.log(error);
      dispatch(reqError(true));
      alert("Check your ID and Password");
    }
   alert("Hello!!");
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
    default:
      return{...state};
  }
}
export default user;