import React, { FC } from 'react';
import LevelConponent from '../../components/LevelConponent/LevelConponent';
import CelebrationComponent from '../../components/CelebrationComponent/CelebrationComponent';

interface CelebrationPageProps {}

const CelebrationPage: FC<CelebrationPageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <LevelConponent />
      <h2 className='text-[2.5rem] font-bold '>CAN YOU FIND IT?</h2>

      <CelebrationComponent/>
    </div>
  </div>
};

export default CelebrationPage;
