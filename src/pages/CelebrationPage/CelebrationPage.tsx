import React, { FC } from 'react';
import CelebrationComponent from '../../components/CelebrationComponent/CelebrationComponent';
import Header from '../../components/Header/Header';

interface CelebrationPageProps {}

const CelebrationPage: FC<CelebrationPageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <Header />
      <CelebrationComponent/>
    </div>
  </div>
};

export default CelebrationPage;
