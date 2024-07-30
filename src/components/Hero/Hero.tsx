import React, { FC, } from 'react';
import { Game } from '../../Helpers/Models/Game';
import { Games } from '../../Helpers/Templates/Games';
import { Link } from 'react-router-dom';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  // const [currentGame, setCurrentGame]=useState<Game|null>();

 return <div className='container min-h-[100vh] md:w-[90vw] max-w-[600px] flex flex-col items-center bg-[#156082] md:h-[90vh]' >
    <h1> CHOOSE A GAME </h1>
    <div className="games">
      {
        Games.map((game : Game)=>{
           return <Link to={"/" + game.slug} className="game cursor-pointer  w-fit md:w-[20rem] h-[10rem] bg-white box-shadow mt-[1rem]">
        <img src={game.img_url} className='w-[100%] h-[100%]  ' alt="can you find it" />
      </Link>
        })
      }

     

    </div>
  </div>
};

export default Hero;
