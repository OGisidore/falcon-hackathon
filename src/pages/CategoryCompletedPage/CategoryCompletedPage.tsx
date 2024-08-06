import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

interface CategoryCompletedPageProps {}

const CategoryCompletedPage: FC<CategoryCompletedPageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <Header />
      <div className="w-[90%] md:w-[60%]  flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  ">
        <p className="font-bold text-[2rem] text-center"> I like playing 
        basketball. </p>
        <div className="Call_toAction w-[100%] flex justify-between">
          <Link to={'/CYFI'} className="pick_another_clueBtn border-[.2rem] border-solid p-[.5rem]  border-black text-[1.2rem] flex justify-center items-center  text-white font-bold rounded-[.5rem] bg-[#e97813] text-center w-[8rem]   ">  Pick Another 
          Clue    </Link>
          <Link to={"/"} className="return_to_homeBtn border-[.2rem] border-solid p-[.5rem] border-black text-[1.2rem] flex justify-center items-center     font-bold text-black rounded-[.5rem] bg-[#ffc000] text-center w-[8rem]   ">  Home </Link>

        </div>

      </div>
    </div>
  </div>
};

export default CategoryCompletedPage;
