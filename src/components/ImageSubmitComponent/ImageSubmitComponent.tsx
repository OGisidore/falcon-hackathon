import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImageShot } from '../../Redux/Selector/Selectors';
import { useNavigate } from 'react-router-dom';
import { ADD_TO_CATEGORY } from '../../Redux/actions/ActionType';

interface ImageSubmitComponentProps {}

const ImageSubmitComponent: FC<ImageSubmitComponentProps> = () => {
  const imgSrc = useSelector(getImageShot)
  console.log(imgSrc);
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const navigate = useNavigate()
const dispatch = useDispatch()
 
    const handleCompareImage = useCallback((imageSrc: string) => {
      
    
      //Envoyer l'image au backend via fetch
      fetch("http://localhost:5000/api/step1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Response from backend:', data); 
        dispatch({
          type: ADD_TO_CATEGORY,
          key: 'color',
          unique: true,
          payload: data.results[0],                   
        })

        navigate("/step3");
      })
      .catch(error => {
        console.error('Error submitting image:', error);
      });
      // navigate("/step3");

    
    }, [navigate, dispatch]);
    
   
  return <div className='w-[90%]   flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  '>
  <div className="preview_image">
    <img src={imgSrc} className='max-w-[100%]' alt="preview" />
  </div>
  <div onClick={()=>handleCompareImage(imgSrc)} className="submit_button cursor-pointer border-[.2rem] border-solid border-black  rounded-[.5rem] text-white font-bold p-[1rem] w-[8rem] flex items-center justify-center text-center text-[1.3rem] bg-[#e97813]">Submit </div>
</div>
};

export default ImageSubmitComponent;
