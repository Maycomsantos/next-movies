import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Home from './pages/MoviesPopular/Home'
import Details from './pages/Details/index'
import DetailsTv from './pages/Tv/DetailsTv/index'
import Forum from './pages/Forum'
import TV from './pages/Tv';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/tv" element={<TV/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/detailstv/:id" element={<DetailsTv/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
