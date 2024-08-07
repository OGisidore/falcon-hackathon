import React, { FC, Fragment, useEffect, useState } from 'react';
// import styles from './CluesListComponent.module.css';
import { clues } from '../../Helpers/Templates/Clues';
import { Clue } from '../../Helpers/Models/Clue';
import { useDispatch } from 'react-redux';
import { ADD_TO_CATEGORY } from '../../Redux/actions/ActionType';
import {  useNavigate } from 'react-router-dom';

interface CluesListComponentProps {}

const CluesListComponent: FC<CluesListComponentProps> = () => {
  const [screenWidth, setScreenWidth]= useState(window.screen.width)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleAddCategory = (category : Clue)=>{
    dispatch({
      type : ADD_TO_CATEGORY,
      key:'category',
      unique : true,
      payload : category
    })
    navigate("/step1")

  }
  let cluesToShow = screenWidth < 768 ? clues : clues.slice(0,4);
  const handleResize = ()=>{
    setScreenWidth(window.screen.width)
   cluesToShow = screenWidth < 768 ? clues : clues.slice(0,4)
  console.log(cluesToShow);
  
  }
  
  useEffect(()=>{
    window.onresize = handleResize

  },)
  

  return (
    <Fragment>
      <div className='w-[90%] grid mt-[2rem] md:flex md:flex-col md:items-center  grid-cols-3 grid-rows-3 gap-1 p-1 md:bg-[#156082] bg-white [&>*:nth-child(odd)]:bg-[#67b7c4] [&>*:nth-child(even)]:bg-[#48d46b]'>
    {
     cluesToShow.length > 4?
      cluesToShow.map((clue:Clue)=>{
        return <div key={clue._id} onClick={()=>handleAddCategory(clue)} className="clue  cursor-pointer p-5 "> <img src={clue.img_url} className='w-[100%]' alt={clue.type} /></div>
      }): cluesToShow.map((clue:Clue)=>{
        return <div key={clue._id} onClick={()=>handleAddCategory(clue)} className="clue border border-solid border-black  cursor-pointer w-[20rem] p-5 mt-4 rounded-lg flex gap-4 items-center "> <img src={clue.img_url} className='w-[3rem]' alt={clue.type} /> <div className="clue_name text-[2rem] font-bold font-archivo"> {clue.type.toUpperCase()} </div> </div>
      })
    }  
  </div>
  {
    // category.trim() === "color" && colo
  }
    </Fragment>
  
  )
};

export default CluesListComponent;
