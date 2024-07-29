import React, { FC } from 'react';
import styles from './CYFIHomeComponent.module.css';
import LevelConponent from '../LevelConponent/LevelConponent';
import CluesListComponent from '../CluesListComponent/CluesListComponent';

interface CYFIHomeComponentProps {}

const CYFIHomeComponent: FC<CYFIHomeComponentProps> = () => (
  <div className='container min-h-[100vh] md:w-[90vw] max-w-[600px] pt-4 flex flex-col items-center bg-[#3c5f6f] md:h-[90vh]'>
    <LevelConponent/>
    <CluesListComponent/>
  </div>
);

export default CYFIHomeComponent;
