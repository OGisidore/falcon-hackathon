import React, { FC, Fragment, useEffect, useState } from "react";
// import styles from "./QuestionAboutCategoryComponent.module.css";
import WebcamComponent from "../WebcamComponent/WebcamComponent";
import { useDispatch } from "react-redux";
import { ADD_TO_CATEGORY } from "../../Redux/actions/ActionType";


interface QuestionAboutCategoryComponentProps {}

const QuestionAboutCategoryComponent: FC<
  QuestionAboutCategoryComponentProps
> = () => {
  const [Oncamera, setOnCamera] = useState<boolean>(false);
  // const imageShot = useSelector(getImageShot);
  const [color, setColor]=useState<string>("")
  const dispatch = useDispatch()
 
  useEffect(()=>{
    const getRandomColorName=()=> {
       const colors = [
    // Rouges
    'Red', 'Scarlet', 'Crimson', 'Burgundy',
  
    // Oranges
    'Orange', 'Coral', 'Peach', 'Tangerine',
  
    // Jaunes
    'Yellow', 'Gold', 'Lemon', 'Mustard',
  
    // Verts
    'Green', 'Forest Green', 'Mint', 'Olive',
  
    // Bleus
    'Blue', 'Sky Blue', 'Turquoise', 'Navy',
  
    // Violets
    'Purple', 'Lavender', 'Mauve', 'Plum',
  
    // Roses
    'Pink', 'Fuchsia', 'Magenta', 'Candy Pink',
  
    // Marrons
    'Brown', 'Sepia', 'Cinnamon', 'Chocolate',
  
    // Noirs et Gris
    'Black', 'Gray', 'Charcoal', 'Slate',
  
    // Blancs et Crèmes
    'White', 'Ivory', 'Cream', 'Off-White',
  
    // Couleurs Neutres
    'Beige', 'Taupe', 'Greige', 'Sand',
  
    // Couleurs Métalliques
    'Silver', 'Gold', 'Copper', 'Bronze'
  ];
   
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex])
  } 
    getRandomColorName()
    dispatch({
      type: ADD_TO_CATEGORY,
      key: 'questionColor',
      unique: true,
      payload: color,
    
    })


  },[color, dispatch])
 


// 
   
              
 

  return (
    <Fragment>
      
        <div className="w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  ">
          {!Oncamera ?<>  <div className="question text-[2rem]  font-bold">
            
              FIND SOMETHING  <span className={"font-bold text-["+ color.toLowerCase()+"]"}>{color.toLocaleUpperCase()} </span>
            
          </div>
          <div className="camera w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center">
            <img
              className="w-[3rem]"
              onClick={() => setOnCamera(true)}
              src="assets/images/photo-camera-interface-symbol-for-button.svg" 
              alt="camera-photo"
            />
          </div> </> : (
              <WebcamComponent />
            )} 
            
         
        
        </div>
      
    </Fragment>
  );
};

export default QuestionAboutCategoryComponent;
