import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getImageShot } from '../../Redux/Selector/Selectors';
import { useNavigate } from 'react-router-dom';

interface ImageSubmitComponentProps {}

const ImageSubmitComponent: FC<ImageSubmitComponentProps> = () => {
  const imgSrc = useSelector(getImageShot)
  console.log(imgSrc);
  
  const navigate = useNavigate()

  const handleCompareImage = ()=>{
    navigate("/step3")


  }
  return <div className='w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  '>
  <div className="preview_image">
    <img src={imgSrc} className='max-w-[100%]' alt="preview" />
  </div>
  <div onClick={handleCompareImage} className="submit_button text-white font-bold p-[2rem] w-[8rem] text-center text-[1.3rem] bg-[#e97813]">Submit </div>
</div>
};

export default ImageSubmitComponent;
