import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Search from './pages/search';
import Mypage from './pages/mypage';
import Input from './pages/input';
import Edit from './pages/edit';
import Detail from './pages/detail';

// import react-query
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AboutUs from './pages/aboutUs';


const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/search/:input" element={<Search/>}/>
        <Route path = "/mypage/:user_id" element={<Mypage/>}/>
        <Route path = "/input" element={<Input/>}/>
        <Route path = "/edit/:id" element={<Edit/>}/>
        <Route path = "/detail/:board_id" element={<Detail/>}/>
        <Route path = "/aboutus" element={<AboutUs/>}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;