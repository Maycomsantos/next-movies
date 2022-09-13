import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Home from './pages/MoviesPopular/Home'
import Details from './pages/Details/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
