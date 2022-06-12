import axios from "axios";

/* 액션 타입 */
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_POSTS_LOADING = "post/GET_POSTS_LOADING";
const GET_POSTS_ERROR = "post/GET_POSTS_ERROR";


/* 액션 생성함수 */
const getPostsSuccess = (payload) => ({
  type : GET_POSTS_SUCCESS, payload
})
const getPostsLoading = (payload) => ({
  type : GET_POSTS_LOADING, payload
})
const getPostsError = (payload) => ({
  type : GET_POSTS_ERROR, payload
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
      dispatch(getPostsLoading(true));
      const { data } = await axios.get("http://localhost:4000/posts");
      dispatch(getPostsSuccess(data));
    }
    catch (error) {
      console.log(error)
      dispatch(getPostsError(true));
    }
    finally {
      dispatch(getPostsLoading(false));
    }
  }
}


/* 리듀서 */
export default function post (state = initialState, action) {
  switch (action.type){
    case GET_POSTS_SUCCESS : {
      return {...state, list:[...action.payload]}
    }
    case GET_POSTS_LOADING : {
      return {...state, loading: action.payload}
    } 
    case GET_POSTS_ERROR : {
      return {...state, error: action.payload}
    }
    default: {
      return state;
    }
  }
}