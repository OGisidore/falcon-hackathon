import React, { FC } from 'react';
// import styles from './LandingPage.module.css';
import Hero from '../../components/Hero/Hero';

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (

  <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
    <Hero/>
  </div>
);

export default LandingPage;
