import React, { FC, } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  // const [currentGame, setCurrentGame]=useState<Game|null>();

 return <div className='container min-h-[100vh] md:w-[90vw] max-w-[600px] flex flex-col items-center bg-[#156082] md:h-[90vh]' >
  <img className='h-[10rem]' src="assets/images/Find and Speak logo.svg" alt="logo" />
    <div className="games">
  
        <Link to={"/FnS"} className="game cursor-pointer flex justify-center flex-col items-center  w-fit md:w-[20rem] h-[100%]  mt-[1rem]">
        <img src="assets/images/FnS Page Image.svg" className='w-[100%]   ' alt="can you find it" />
        <div  className="btn flex justify-center p-0 mt-0 "> <span className='bg-[#e97813] self-center font-bold text-[1.5rem] rounded-[0.3rem] border border-solid border-black text-black p-[1rem]'>start</span>  </div>
      </Link>
       
      

     

    </div>
  </div>
};

export default Hero;
