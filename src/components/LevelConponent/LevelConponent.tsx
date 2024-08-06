import React, { FC } from 'react';
// import styles from './LevelConponent.module.css';

interface LevelConponentProps {}

const LevelConponent: FC<LevelConponentProps> = () => (
  <div className='   md:self-end flex flex-wrap gap-4 items-center '>
    <div className="level font-sans text-[1.5rem]">
      LEVEL : Beginer
    </div>
    <div className="checked flex  w-[7rem]  ">
      <img src="assets/images/yellow checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[2rem]' alt="checked-yellow" />
    </div>
  </div>
);

export default LevelConponent;
