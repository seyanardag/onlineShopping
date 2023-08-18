import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrPage from './pages/ErrPage';
import Navbar from './pages/Navbar';
import Categories from './pages/Cetegories'
import BestSellers from './pages/BestSellers';
import Promotions from './pages/Promotions';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Navbar />}>
          <Route path='Home' element={<Home/>}/>
          <Route path="Shopping" element={<App/>}/>
          <Route path="Cetegories" element={<Categories/>}/>
          <Route path="BestSellers" element={<BestSellers/>}/>
          <Route path="Promotions" element={<Promotions/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="Contact" element={<Contact/>}/>          

        <Route path='*' element={<ErrPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
