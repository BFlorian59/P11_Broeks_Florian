import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './page/Home'
import Logement from './page/Logement'
import Propos from './page/Propos'
import Header from './component/Header'
import Footer from './component/Footer'
import ErrorPage from './component/Error'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="/A-Propos" element={<Propos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


