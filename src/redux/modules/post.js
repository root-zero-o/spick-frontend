import axios from "axios";
import { storage } from "../../shared/firebase";
import { ref, deleteObject } from "firebase/storage";
import  apis  from "../../api/main";

/* 액션 타입 */
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_LOADING = "post/GET_LOADING";
const GET_ERROR = "post/ERROR";
const ADD_POST_SUCCESS = "post/ADD_POST_SUCCESS";
const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS";


/* 액션 생성함수 */
const getPostsSuccess = (payload) => ({
  type : GET_POSTS_SUCCESS, payload
})
export const getLoading = (payload) => ({
  type : GET_LOADING, payload
})
const getError = (payload) => ({
  type : GET_ERROR, payload
})
const addPostSuccess = () => ({
  type: ADD_POST_SUCCESS
})
const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS
})

/* 초기 상태 선언 */
const initialState = {
  list : [],
  loading: false,
  error: false
}

/* 미들웨어 */
export const getPostsDB = () => {
  return async function(dispatch, getState) {
    try {
      dispatch(getLoading(true));
      const { data } = await apis.getPosts();
      dispatch(getPostsSuccess(data));
    }
    catch (error) {
      dispatch(getError(true));
      console.log(error)
      alert("네트워크 오류!")
    }
    finally {
      dispatch(getLoading(false));
    }
  }
}

export const addPostDB = ({title, imgURL, text, nickname, user_picURL}) => {
  return async function(dispatch, getState) {
    try {
      dispatch(getLoading(true));
      await apis.post({title, imgURL, text, nickname, user_picURL});
      dispatch(addPostSuccess());
      alert("게시글이 등록되었습니다.");
    }
    catch(error) {
      dispatch(getError(true));
      console.log(error)
      alert("네트워크 오류로 글을 작성하지 못했어요 :(")
    }
    finally {
      dispatch(getLoading(true));
    }
  }
}

export const deleteImgFB = (url) => {
  return async function (dispatch) {
    const deleteRef = ref(storage, url);
    await deleteObject(deleteRef);
  }
}

export const deletePostDB = (id) => {
  return async function (dispatch, getState){
    try {
      dispatch(getLoading(true));
      await apis.deletePost(id);
    }
    catch(error) {
      dispatch(getError(true));
      console.log(error);
      alert("네트워크 오류로 글을 삭제하지 못했어요 :(");
    }
    finally {
      dispatch(getLoading(false));
    }
  }
}

export const putPostDB = ({id, title, imgURL, text}) => {
  return async function (dispatch, getState){
    try {
      dispatch(getLoading(true));
      await apis.putPost({id, title, imgURL, text});
    }
    catch {
      dispatch(getError(true));
      alert("네트워크 오류로 글을 수정하지 못했어요 :(")
    }
    finally {
      dispatch(getLoading(false));
    }
  }
}


/* 리듀서 */
export default function post (state = initialState, action) {
  switch (action.type){
    case GET_POSTS_SUCCESS : {
      return {...state, list:[...action.payload]}
    }
    case GET_LOADING : {
      return {...state, loading: action.payload}
    } 
    case GET_ERROR : {
      return {...state, error: action.payload}
    }
    case ADD_POST_SUCCESS : {
      return { ...state, list:[...state.list]}
    }
    default: {
      return state;
    }
  }
}