import React from 'react'
import axios from 'axios'

const initialState={
  commentList:[],
}

const SERVER_REQ="user/SERVER_REQ"  // loading check
const REQ_SUCCESS="user/REQ_SUCCESS"; // login check
const REQ_ERROR="user/REQ_ERROR"; // error check

const ADD="comment/ADD";
const LOAD="comment/LOAD";
const EDIT="comment/EDIT";
const DELETE="comment/DELETE";

export function serverReq(payload){
  return{type:SERVER_REQ,payload}
}
export function reqSucess(payload){
  return{type:REQ_SUCCESS,payload}
}
export function reqError(payload){
  return{type:REQ_ERROR,payload}
}

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
    try{
      dispatch(serverReq(true));
      const postComment = await axios({
        method:"post",
        url : "http://localhost:5000/posts",
        data : {
          reply_id: payload.reply_id,
          reply_nickname: payload.reply_nickname,
          reply_picURL: payload.reply_picURL,
          reply_text: payload.reply_text,
        }
      })
      dispatch(Add(postComment))
    } 
    catch(error){
      dispatch(reqError(true));
      alert("Couldn't Post Your Comment!!")
    }
    finally{
      dispatch(serverReq(false));
    }
  }
}


export const __getComment=()=>{
  
  return async function(dispatch,getState){
    try{
      dispatch(serverReq(true));
      const {data} = await axios.get("http://localhost:5000/posts");
      dispatch(Load({data}));
      }
      catch(error){
        dispatch(reqError(true));
        console.log(error)
        alert("Couldn't get CommentList!!")
      }
      finally{
        dispatch(serverReq(false));
      }
  }
}


export const __deleteComment=(id)=>{
  return async function(dispatch,getState){
    dispatch(serverReq(true))
    try{
      await axios.delete(`http://localhost:5000/posts/${id}`)
      alert("Your Comment has been Deleted")
    }
    catch(error){
      dispatch(reqError(true));
      alert("Comment Delete Error")
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}

export const __editComment=(payload)=>{
  return async function(dispatch,getState){
    dispatch(serverReq(true));
    try{
      const editComment= await axios({
        method:"put",
        url:"http://localhost:5000/posts",
        data:{
          reply_id: payload.reply_id,
          reply_nickname: payload.reply_nickname,
          reply_picURL: payload.reply_picURL,
          reply_text: payload.reply_text,
          board_id:payload.board_id,
        }
      })
    }
    catch(error){
      dispatch(reqError(true))
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}


function comment(state=initialState,action){
  switch(action.type)
  {
    case ADD: return{...state,comment:[...state.comment]};
    case LOAD: return{...state,commentList:action.payload};
    case EDIT: return{};
    case DELETE: return{};
    case REQ_SUCCESS:{
      return{...state,login:action.payload};
    }
    case REQ_ERROR:{
      return{...state,error:action.payload}
    }
    case SERVER_REQ:{
      return{...state,loading:action.payload}
    }
    default: return{...state};
  }
}
export default comment;