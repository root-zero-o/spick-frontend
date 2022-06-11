import React from 'react'
import axios from 'axios'
const initialState={
  comment:[]
}
const ADD="comment/ADD";
const LOAD="comment/LOAD";
const EDIT="comment/EDIT";
const DELETE="comment/DELETE";
export function Add(payload){
  return{type:ADD,payload}
}
export function Load(payload){
  return{type:LOAD,payload}
}
export function Edit(payload){
  return{type:EDIT,payload}
}
export function Delete(payload){
  return{type:DELETE,payload}
}
export const __postComment=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
   const postComment = await axios({
    method:"post",
    url : "http://localhost:4000/posts",
    data : {
      reply_id: payload.comment_id,
      reply_nickname: payload.comment_nickname,
      reply_picURL: payload.comment_picURL,
      reply_text: payload.comment_comment
    }
   })
   dispatch({postComment});
  }
}
export const __getComment=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
   const signup = await axios({
    method:"get",
    url : "http://localhost:4000/posts",
    data : {
      username : payload.username,
      password : payload.password,
      nickname : payload.nickname,
    }
   })
   dispatch({signup});
  }
}
function comment(state=initialState,action){
  switch(action.type)
  {
    case ADD: return{...state,comment:[...state.comment]};
    case LOAD: return{...state,comment:action.payload};
    case EDIT: return{};
    case DELETE: return{};
    default: return{...state};
  }
}
export default comment;