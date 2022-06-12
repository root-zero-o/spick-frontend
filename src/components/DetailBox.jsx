/* IMPORT */
import React from 'react'
import styled from 'styled-components'


// detail 페이지에서 해당 게시글 정보가 담기는 컴포넌트
const DetailBox = () => {


  return (
    <StDetailContainer>
      <StDetailBox>
        <h2 style={{color:"white"}}>Witcher 3 : wild hunt</h2>
        <StDiv>
          <StImg>이미지박스</StImg>
          <StContentBox>
            <StUserBox>
              <StUserImg></StUserImg>
              <span style={{fontWeight:"bold"}}>근영</span>
            </StUserBox>
            <div style={{height:"90%"}}>
              <span style={{color:"white"}}>컴퍼니 오브 히어로즈 누가함 </span>
            </div>
            <div style={{height:"10%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <StLikeBox>좋아요 0개</StLikeBox>
              <StLikeBox>댓글 0개</StLikeBox>
            </div>
          </StContentBox> 
        </StDiv>   
        </StDetailBox>
    </StDetailContainer>
  )
}

/* STYLED-COMPONENTS */

const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StDetailBox= styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
`;

const StDiv = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10px;
  background: rgb(38,57,75);
  background: linear-gradient(135deg, rgba(38,57,75,1) 0%, rgba(21,27,31,1) 100%);
`;

const StImg = styled.div`
  width: 500px;
  height: 100%;
  background-color: #ddd;
`;

const StContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px;
`;

const StUserBox = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  margin: 20px;
  color: white;
`;

const StUserImg = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: tomato;
  border-radius: 50%;
`;

const StLikeBox = styled.div`
  width: 100px;
  height: 25px;
  margin: 0px 5px;
  background-color: #2b4553;
  color: #46a1d9;
  text-align: center;
  font-weight: bold;
  border-radius: 3px;
`;


export default DetailBox;
