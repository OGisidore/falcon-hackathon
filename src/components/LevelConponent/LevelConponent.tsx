import React, { FC } from 'react';
// import styles from './LevelConponent.module.css';

interface LevelConponentProps {}

const LevelConponent: FC<LevelConponentProps> = () => (
  <div className='   md:self-end flex flex-wrap gap-4 items-center '>
    <div className="level font-sans text-[1rem] md:text-[1.5rem]">
      LEVEL : Beginer
    </div>
    <div className="checked flex  md:w-[7rem] w-[4]  ">
      <img src="assets/images/yellow checkmark.svg" className='md:w-[2rem] w[1rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='md:w-[2rem] w[1rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='md:w-[2rem] w[1rem]' alt="checked-yellow" />
    </div>
  </div>
);

export default LevelConponent;
