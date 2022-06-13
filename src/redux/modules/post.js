import axios from "axios";

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
const getLoading = (payload) => ({
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
      const { data } = await axios.get("");
      dispatch(getPostsSuccess(data));
    }
    catch (error) {
      dispatch(getError(true));
      alert("네트워크 오류!")
    }
    finally {
      dispatch(getLoading(false));
    }
  }
}

export const addPostDB = ({title, img, text}) => {
  return async function(dispatch, getState) {
    try {
      dispatch(getLoading(true));
      // formData 안에 data 넣기
      let formData = new FormData();

      formData.append("board_imgURL", img)

      let stringData = [{
        board_title : title,
        board_text : text,
        nickname: "근영",
        user_picURL: "https://avatars.githubusercontent.com/u/97326130?v=4",
        like: 3
      }]
      formData.append("data", new Blob([JSON.stringify(stringData)], {type: "application/json"}))
      for(let value of formData.values()){
        console.log(value);
      }
      await axios.post("http://localhost:4000/posts", formData)
    }
    catch(error) {
      dispatch(getError(true));
      alert("네트워크 오류로 글을 작성하지 못했어요 :(")
    }
    finally {
      dispatch(getLoading(true));
    }
  }
}

export const deletePostDB = (id) => {
  return async function (dispatch, getState){
    try {
      dispatch(getLoading(true));
      await axios.delete(`http://localhost:4000/posts/${id}`);
    }
    catch(error) {
      dispatch(getError(true));
      alert("네트워크 오류로 글을 삭제하지 못했어요 :(");
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