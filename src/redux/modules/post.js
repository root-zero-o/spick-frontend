import axios from "axios";

/* 액션 타입 */
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_LOADING = "post/GET_LOADING";
const GET_ERROR = "post/ERROR";


/* 액션 생성함수 */
const getPostsSuccess = (payload) => ({
  type : GET_POSTS_SUCCESS, payload
})
const getLoading = (payload) => ({
  type : GET_LOADING, payload
})
const getError = (payload) => ({
  type : GET_ERROR, payload
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
      const { data } = await axios.get("http://localhost:4000/posts");
      dispatch(getPostsSuccess(data));
    }
    catch (error) {
      console.log(error)
      dispatch(getError(true));
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
    default: {
      return state;
    }
  }
}