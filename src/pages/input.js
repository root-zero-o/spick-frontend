import React, { useState, useRef } from 'react'
import { useDispatch  } from 'react-redux';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
// import components
import Header from '../components/Header';
// import middleware
import { addPostDB } from "../redux/modules/post";

const Input = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleInput = useRef(null);
  const textInput = useRef(null);

  // 이미지 미리보기 state
  const [fileImage, setFileImage] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  // 이미지 업로드 onchange event
  const saveFileImage = (event) => {
    setFileImage(window.URL.createObjectURL(event.target.files[0]));
    setFileUploaded(true);
  }

  const onAddPostHandler = () => {
    dispatch(addPostDB({
      title: titleInput.current.value, 
      imgURL : fileImage,
      text: textInput.current.value
    }));
    alert("게시글이 등록되었습니다.");
    navigate('/');

  }

  return (
    <StInputWrap>
      <Header/>
      <StInputBox onSubmit={onAddPostHandler}>
        <StTitleInput placeholder="Title" ref={titleInput} required/>
        <div style={{display:"flex", width:"770px", height:"400px"}}>
          {fileUploaded ? (
            <StImg src={fileImage}></StImg>
          ) : (<StImgBox><span>No Image :(</span></StImgBox>)}
          <div style={{width:"50%", height:"100%"}}>
            <StLabel htmlFor="file">Choose Image file</StLabel>
            <input 
              type="file" 
              id="file" 
              accept="image/*" 
              style={{display:"none"}}
              onChange={saveFileImage}
              required/>
            <StTextInput 
              placeholder="Introduce your favorite game!" 
              ref={textInput}
              required/>
            <StBtnDiv>
              <StBtn>작성완료</StBtn>
              <Link to={'/'}><StBtn>취소</StBtn></Link>
            </StBtnDiv>
            
          </div>
        </div>
      </StInputBox>
    </StInputWrap>
  )
}

/* STYLED-COMPONENTS */

const StInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StInputBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  padding: 20px;
  background-color: #2a4c6b;
  border-top: 5px solid #41799a;
`;

const StTitleInput = styled.input`
  width: 750px;
  margin: 20px 0px;
  padding: 10px;
  background-color: #142231;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

const StImg = styled.img`
  width: 50%; 
  height: 100%;
`;

const StImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #142231;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

const StLabel = styled.label`
  display: block;
  background: rgb(79,200,47);
  width: 345px;
  margin-left: 20px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(79,200,47,1) 0%, rgba(25,177,78,1) 79%);
  color: white;
  text-align: center;
  &:hover{
    background: #53d432;
    cursor: pointer;
  }
`;

const StTextInput = styled.textarea`
  width: 343px;
  height: 250px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  background-color: #142231;
  color: white;
  font-size: 17px;
`;

const StBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 365px;
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;;
`;

const StBtn = styled.button`
  width: 170px;
  height: 50px;
  background: rgb(57,154,236);
  background: linear-gradient(135deg, rgba(57,154,236,1) 0%, rgba(35,94,207,1) 100%);
  color: white;
  font-size: 20px;
  border: none;
  &:hover{
    background: #3999ec;
    cursor: pointer;
  }
`;

export default Input