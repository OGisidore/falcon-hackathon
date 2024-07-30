import React, { FC } from 'react';
// import styles from './LevelConponent.module.css';

interface LevelConponentProps {}

const LevelConponent: FC<LevelConponentProps> = () => (
  <div className=' w-[95%] md:w-[400px] md:self-end flex  justify-between'>
    <div className="level font-sans text-[1.5rem]">
      LEVEL : Beginer
    </div>
    <div className="checked flex  w-[7rem     ]  ">
      <img src="assets/images/yellow checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
    </div>
  </div>
);

export default LevelConponent;
