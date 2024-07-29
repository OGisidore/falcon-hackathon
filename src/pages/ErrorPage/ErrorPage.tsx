import React, { FC } from 'react';
import styles from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => (
  <div className='w-full  flex flex-col justify-center gradient items-center min-h-[100vh]                 '>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry young king, the page is not founded.</p>
      <p>
        <i>404 Error</i>
      </p>
      <Link to={"/"} className='block p-4 text-white bg-[#156082] font-bold text-[1.5rem] text-center' >return</Link>
    </div>
  </div>
);

export default ErrorPage;
