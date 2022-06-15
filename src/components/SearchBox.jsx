import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Hook
import { useGetPosts } from '../Hooks/useGetPosts';
//
import Card from './Card';
//
import { __searchNum } from "../redux/modules/search";

const SearchContainer = () => {
  
  const dispatch = useDispatch();
  const searchWords = useSelector(state => state.search.word);

  const { data } = useGetPosts();

  let dataTitleArr = [];
  let Word = [];

  for(let i = 0; i < data.length; i ++){
    dataTitleArr[i] = data[i].board_title.split("");
  }

  for(let i = 0; i < data.length; i++){
    for(let j = 0; j < searchWords.length; j++){
      if(dataTitleArr[i].indexOf(searchWords[j]) !== -1){
        Word[i] = dataTitleArr[i]
      }
    }
  }

  const findWordArr = Word.filter( value => true);
  let findWord = []
  for(let i = 0; i < findWordArr.length; i++){
    findWord[i] = findWordArr[i].join("")
  }

  const post = findWord.map( word => data.find(value => word === value.board_title.replace(/ /g,"")))
  dispatch(__searchNum(post.length));

  return (
    <>
      {post.map((value, index) => {
          return <Card
            key={index}
            id={value.board_id}
            board_title={value.board_title}
            board_imgURL={value.board_imgURL}
            nickname={value.nickname}
            user_picURL={value.user_picURL}
            like={value.like}/>
        })}
    </>
  )
}

export default SearchContainer;
