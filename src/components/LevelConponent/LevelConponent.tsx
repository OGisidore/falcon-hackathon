import React, { FC } from 'react';
import styles from './LevelConponent.module.css';

interface LevelConponentProps {}

const LevelConponent: FC<LevelConponentProps> = () => (
  <div className=' w-[95%] flex items-center justify-between'>
    <div className="level text-[2rem]">
      Level : Beginer
    </div>
    <div className="checked flex w-[10rem] ">
      <img src="assets/images/yellow checkmark.svg" className='w-[33%]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[33%]' alt="checked-yellow" />
      <img src="assets/images/gray checkmark.svg" className='w-[33%]' alt="checked-yellow" />
    </div>
  </div>
);

export default LevelConponent;
