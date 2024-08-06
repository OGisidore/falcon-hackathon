import React, { FC } from 'react';
import LevelConponent from '../LevelConponent/LevelConponent';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className='min-w-[80%] flex justify-between p-[1rem] px-[2rem] '>
    <div className="LOGO w-[10rem]"> <img className='w-[100%]'     src="assets/images/FindnSpeak.svg" alt="logo of fimd and speak" /></div>
    <LevelConponent/>
  </div>
);

export default Header;
