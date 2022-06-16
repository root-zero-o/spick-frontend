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
    }),

    getComments : ({board_id})=> api.get(`/api/detail/${board_id}/reply`),
    postComment : (payload)=> api.post(`/api/detail/${payload.board_id}/reply`,{
        reply_text: payload.reply_text,
    }),
    deleteComment : (payload)=> api.delete(`/api/detail/${payload.board_id}/${payload.reply_id}`),
    putComment : (payload)=> api.put(`/api/detail/${payload.board_id}/${payload.reply_id}`,{
        reply_text: payload.reply_text,
    }),
    getRank : ()=>api.get(`/api/best`),
    deleteComments : (payload)=>api.delete(`/api/detail/${payload.board_id}/reply`)
}

export default apis;