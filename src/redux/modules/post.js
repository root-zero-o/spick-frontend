import axios from "axios";

/* 액션 타입 */
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_LOADING = "post/GET_LOADING";
const GET_ERROR = "post/ERROR";
const ADD_POST_SUCCESS = "post"


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
const addPostSuccess = () => ({
  type: ADD_POST_SUCCESS
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
      const { data } = await axios.get("");
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

export const addPostDB = ({title, imgURL, text}) => {
  return async function(dispatch, getState) {
    try {
      dispatch(getLoading(true));
      // const slicedImgURL = imgURL.slice(5, imgURL.length);
      axios.post("", {
        board_title : title,
        board_imgURL : imgURL,
        board_text : text,
        // 이부분은 현재 로그인 된 유저 정보 받아서 넣기(getState)
        nickname: "근영",
        user_picURL: "https://avatars.githubusercontent.com/u/97326130?v=4",
        like: 3
      })
      dispatch(addPostSuccess());
    }
    catch {

    }
    finally {

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