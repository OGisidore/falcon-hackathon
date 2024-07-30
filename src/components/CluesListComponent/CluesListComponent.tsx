import React, { FC, useEffect, useState } from 'react';
// import styles from './CluesListComponent.module.css';
import { clues } from '../../Helpers/Templates/Clues';
import { Clue } from '../../Helpers/Models/Clue';

interface CluesListComponentProps {}

const CluesListComponent: FC<CluesListComponentProps> = () => {
  const [screenWidth, setScreenWidth]= useState(window.screen.width)
  let cluesToShow = screenWidth < 768 ? clues : clues.slice(0,4);
  const handleResize = ()=>{
    setScreenWidth(window.screen.width)
   cluesToShow = screenWidth < 768 ? clues : clues.slice(0,4)
  console.log(cluesToShow);
  
  }
  useEffect(()=>{
    window.onresize = handleResize

  },)
  

  return <div className='w-[90%] grid mt-[5rem] md:flex md:flex-col md:items-center  grid-cols-3 grid-rows-3 gap-1 p-1 md:bg-[#156082] sm:bg-white [&>*:nth-child(odd)]:bg-blue-500 [&>*:nth-child(even)]:bg-[#47a73a]'>
    {
     cluesToShow.length > 4?
      cluesToShow.map((clue:Clue)=>{
        return <div key={clue._id} className="clue cursor-pointer p-5 "> <img src={clue.img_url} className='w-[100%]' alt={clue.type} /></div>
      }): cluesToShow.map((clue:Clue)=>{
        return <div key={clue._id} className="clue cursor-pointer w-[20rem] p-5 mt-4 rounded-lg flex gap-4 items-center "> <img src={clue.img_url} className='w-[3rem]' alt={clue.type} /> <div className="clue_name text-[2rem] font-bold font-sans"> {clue.type.toUpperCase()} </div> </div>
      })
    }  
  </div>
};

export default CluesListComponent;
