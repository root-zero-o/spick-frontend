import api from "./core/index";
import { getCookie }   from '../Cookie';

const user_picURL = getCookie("user_pic");
const nickname = getCookie("user_nick");

const apis = {
    getPosts : () => api.get("/api"),
    post : ({title, imgURL, text}) => api.post("/api/input", {
        board_title : title,
        board_imgURL : imgURL,
        board_text : text,
        nickname : nickname,
        user_picURL : user_picURL
    }),
    deletePost : (id) => api.delete(`/api/${id}`)
}

export default apis;