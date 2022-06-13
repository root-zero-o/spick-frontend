import React from 'react';
import styled from 'styled-components';
// import style
import { StInputBox, StTitleInput, StImg, StLabel, StTextInput,  StBtnDiv, StBtn } from "../pages/input";
//import Router
import { Link, useNavigate } from 'react-router-dom';


const EditBox = () => {
  return (
    <StInputBox>
        <StTitleInput value="title"/>
        <div style={{display:"flex", width:"770px", height:"400px"}}>
            <StImg></StImg>
            <div style={{width:"50%", height:"100%"}}>
                <StLabel htmlFor="file">Choose your image file</StLabel>
                <input 
                    type="file" 
                    style={{display:"none"}}
                    id="file"/>
                <StTextInput value="글"></StTextInput>
                <StBtnDiv>
                    <StBtn>수정하기</StBtn>
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
