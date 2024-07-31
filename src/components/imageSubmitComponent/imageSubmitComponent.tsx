import React, { FC } from 'react';
import styles from './imageSubmitComponent.module.css';

interface imageSubmitComponentProps {}

const imageSubmitComponent: FC<imageSubmitComponentProps> = () => (
  <div className='w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  '>
    <div className="preview_image">
      <img src="" className='max-w-[100%]' alt="preview" />
    </div>
    <div className="submit_button text-white font-bold p-[2rem] w-[8rem] text-center text-[1.3rem] bg-[#e97813]">Submit </div>
  </div>
);

export default imageSubmitComponent;
