import React, { FC } from 'react';
import CYFIHomeComponent from '../../components/CYFIHomeComponent/CYFIHomeComponent';

interface CYFIpageProps {}


const CYFIpage: FC<CYFIpageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
    <CYFIHomeComponent/>
  </div>
};

export default CYFIpage;
