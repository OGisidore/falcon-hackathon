import React, { FC } from 'react';
// import styles from './CYFIHomeComponent.module.css';
import LevelConponent from '../LevelConponent/LevelConponent';
import CluesListComponent from '../CluesListComponent/CluesListComponent';

interface CYFIHomeComponentProps {}

const CYFIHomeComponent: FC<CYFIHomeComponentProps> = () => (
  <div className='container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]'>
    <LevelConponent/>
    <CluesListComponent/>
  </div>
);

export default CYFIHomeComponent;
