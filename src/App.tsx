import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <div className=" w-full  flex flex-col items-center ">
     <Routes>
       <Route path="/" element={<LandingPage />} />
       {/* <Route path="/:slug" element={<EditionPage />} /> */}
       <Route path="/**" element={<ErrorPage />} />
     </Routes>
   </div>
 </BrowserRouter>
   
  );
}

export default App;
