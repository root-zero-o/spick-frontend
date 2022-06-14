import api from "./core/index";

const apis = {
    getPosts : () => api.get("/api"),
    post : ({title, imgURL, text}) => api.post("/api/input", {
        board_title : title,
        board_imgURL : imgURL,
        board_text : text
    }),
    deletePost : (id) => api.delete(`/api/${id}`)
}

export default apis;