import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import CYFIpage from './pages/CYFIpage/CYFIpage';
import ChatQuestionPage from './pages/ChatQuestionPage/ChatQuestionPage';
import ImageSubmitionPage from './pages/ImageSubmitionPage/ImageSubmitionPage';
import CelebrationPage from './pages/CelebrationPage/CelebrationPage';

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
    },
    {
      path :"/step1",
      element : <ChatQuestionPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path :"/step2",
      element : <ImageSubmitionPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path :"/step3",
      element : <CelebrationPage/>,
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
