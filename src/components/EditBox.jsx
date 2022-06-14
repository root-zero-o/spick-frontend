import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import style
import { StInputBox, StTitleInput, StImg, StLabel, StTextInput,  StBtnDiv, StBtn } from "../pages/input";
// import middleware
import { deleteImgFB, putPostDB, getLoading } from '../redux/modules/post';
// import FireBase storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";


const EditBox = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const postId = useParams().id;

    const titleInput = useRef(null);
    const textInput = useRef(null);

    const [post, setPost] = useState(undefined);
    const [fileURL, setFileURL] = useState("");
    const [FileChanged, setFileChanged] = useState(false);

    const postList = useSelector(state => state.post.list)

    useEffect(() => {
        const post = postList.find(value => postId === String(value.id));
        if(post){
            setPost(post)
        }   
    },[post, postId, postList])

    // 이미지 FB에 업로드하는 미들웨어
  const uploadImgFB = (event) => {
    return async function (dispatch){
        try{
            dispatch(getLoading(true));
            const uploaded_file = await uploadBytes(
                ref(storage, `images/${event.target.files[0].name}/`),
                event.target.files[0]
              );
              const file_url = await getDownloadURL(uploaded_file.ref);
              setFileURL(file_url);
        }
        catch(error){
            alert("네트워크 오류로 이미지 업로드에 실패했습니다 :(")
        }
        finally {
            dispatch(getLoading(false));
        }
    }
  }

    const onChangeImgInput = (event) => {
        dispatch(uploadImgFB(event));
        dispatch(deleteImgFB(post?.board_imgURL));
        setFileChanged(true);   
    }

    const onPutPostHandler = () => {
        dispatch(putPostDB({
            id : postId,
            title : titleInput.current.value,
            imgURL : fileURL,
            text: textInput.current.value
        }))
        navigate('/');
    }

  return (
    <StInputBox>
        <StTitleInput defaultValue={post?.board_title} ref={titleInput}/>
        <div style={{display:"flex", width:"770px", height:"400px"}}>           
            { FileChanged ? 
                    (<StImg src={fileURL}/>) : 
                    (<StImg src={post?.board_imgURL}/>)
            }
            
            <div style={{width:"50%", height:"100%"}}>
                <StLabel htmlFor="file">Choose your image file</StLabel>
                <input 
                    type="file" 
                    style={{display:"none"}}
                    id="file"
                    onChange={onChangeImgInput}/>
                <StTextInput defaultValue={post?.board_text} ref={textInput}/>
                <StBtnDiv>
                    <StBtn onClick={onPutPostHandler}>수정하기</StBtn>
                    <Link to={'/'}><StBtn>돌아가기</StBtn></Link>
                </StBtnDiv>
            </div>  
        </div>
    </StInputBox>
    
  )
}

const StBox = styled.div`
    display: flex;
    margin: 20px;
`;

export default EditBox;
