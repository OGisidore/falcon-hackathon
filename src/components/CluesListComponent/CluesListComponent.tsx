import React, { FC } from 'react';
import styles from './CluesListComponent.module.css';
import { clues } from '../../Helpers/Templates/Clues';
import { Clue } from '../../Helpers/Models/Clue';

interface CluesListComponentProps {}

const CluesListComponent: FC<CluesListComponentProps> = () => (
  <div className='w-[90%] grid mt-[5rem] grid-cols-3 grid-rows-3 gap-1 p-1 bg-white [&>*:nth-child(odd)]:bg-blue-500 [&>*:nth-child(even)]:bg-[#47a73a]'>
    {
      clues.map((clue:Clue)=>{
        return <div key={clue._id} className="clue cursor-pointer p-5 "> <img src={clue.img_url} className='w-[100%]' alt={clue.type} /></div>
      })
    }  
  </div>
);

export default CluesListComponent;
