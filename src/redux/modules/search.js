/* 액션 타입 */
const SEARCH = "search/SEARCH";
const SEARCH_NUM = "search/SEARCH_NUM";


/* 액션 생성함수 */
const searchPost = (payload) => ({
    type: SEARCH, payload
})

const searchNum = (payload) => ({
    type: SEARCH_NUM, payload
})

/* 초기 상태 선언 */
const initialState = {
    word: [],
    num : 0
}

/* 미들웨어 */

export const __search = (words) => {
    return async function (dispatch){
        const wordsArr = words.split("");
        dispatch(searchPost(wordsArr));   
    }
}

export const __searchNum = (num) => {
    return function (dispatch){
        dispatch(searchNum(num))
    }
}

/* 리듀서 */
export default function search(state = initialState, action){
    switch(action.type){
        case SEARCH : {
            return { ...state, word : action.payload }
        }
        case SEARCH_NUM : {
            return {...state, num : action.payload}
        }
        default : {
            return state;
        }
    }
}
