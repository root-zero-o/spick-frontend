import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Search from './pages/search';
import Mypage from './pages/mypage';
import Input from './pages/input';
import Edit from './pages/edit';
import Detail from './pages/detail';




function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/search/:input" element={<Search/>}/>
      <Route path = "/mypage/:user_id" element={<Mypage/>}/>
      <Route path = "/input" element={<Input/>}/>
      <Route path = "/edit:post_id" element={<Edit/>}/>
      <Route path = "/detail/:id" element={<Detail/>}/>
    </Routes>
  );
}

export default App;