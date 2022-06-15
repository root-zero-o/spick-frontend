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


    getComments : ({board_id})=> api.get(`/api/detail/${board_id}`),
    postComment : (payload)=> api.post(`/api/detail/${payload.board_id}/reply`,{
        reply_text: payload.reply_text,
    }),
    deleteComment : ()=> api.delete(`/api/detail/boardid/reid`),
    putComment : (payload)=> api.put(`/api/detail/boardid/reid`,{
        reply_id: payload.reply_id,
        reply_nickname: payload.reply_nickname,
        reply_picURL: payload.reply_picURL,
        reply_text: payload.reply_text,
        board_id:payload.board_id,
    })


}

export default apis;