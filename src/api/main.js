import api from "./core/index";

const apis = {
    getPosts : () => api.get("/api"),
    post : ({title, imgURL, text}) => api.post("/api/input", {
        board_title : title,
        board_imgURL : imgURL,
        board_text : text
    }),
    deletePost : (id) => api.delete(`/api/detail/${id}`),
    putPost : ({id, title, imgURL, text}) => api.put(`/api/detail/${id}`, {
        board_title : title,
        board_imgURL : imgURL,
        board_text : text,
    })
}

export default apis;