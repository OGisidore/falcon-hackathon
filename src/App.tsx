import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import CYFIpage from './pages/CYFIpage/CYFIpage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path :"/CYFI",
      element : <CYFIpage/>,
      errorElement: <ErrorPage />,
    }
  ]);
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    
   
  );
}

export default App;
