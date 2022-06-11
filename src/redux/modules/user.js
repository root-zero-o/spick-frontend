import React from 'react'


const initialState = {
  user:{}
}

const ADD = "user/ADD";
const LOAD = "user/LOAD";

export function Add(payload,getState){
  return{ type:ADD,payload}
}
export function Load(payload,getState){
  return {type:LOAD,payload}
}


export const __addUser=(user)=>{
  return async function(sispatch,getState){

  }
}

export const __loadUser=(user)=>{
  return async function(dispatch,getState){

  }
}



function user(state=initialState,action){
  switch(action.type){
    case ADD:{
      return{}
    }
    case LOAD:{
      return{}
    }
    default:
      return{...state};

  }
  
}

export default user;
