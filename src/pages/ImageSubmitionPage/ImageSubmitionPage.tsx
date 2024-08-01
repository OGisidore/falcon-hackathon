import React, { FC } from 'react';
import LevelConponent from '../../components/LevelConponent/LevelConponent';
import ImageSubmitComponent from '../../components/ImageSubmitComponent/ImageSubmitComponent';

interface ImageSubmitionPageProps {}

const ImageSubmitionPage: FC<ImageSubmitionPageProps> = () =>  {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <LevelConponent />
      <ImageSubmitComponent/>
      {/* <div className='w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  '>
    <div className="preview_image">
      <img src="" className='max-w-[100%]' alt="preview" />
    </div>
    <div className="submit_button text-white font-bold p-[2rem] w-[8rem] text-center text-[1.3rem] bg-[#e97813]">Submit </div>
  </div> */}
    </div>
  </div>
};

export default ImageSubmitionPage;
