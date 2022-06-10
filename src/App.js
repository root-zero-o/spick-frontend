import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path = "/" element={<home/>}/>
      <Route path = "/login" element={<login/>}/>
      <Route path = "/signup" element={<signup/>}/>
      <Route path = "/search/:input" element={<search/>}/>
      <Route path = "/mypage/:user_id" element={<mypage/>}/>
      <Route path = "/input" element={<input/>}/>
      <Route path = "/edit:post_id" element={<edit/>}/>
      <Route path = "/detail/:post_id" element={<detail/>}/>
    </Routes>
  );
}

export default App;