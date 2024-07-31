import React, { FC, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { ADD_TO_CATEGORY } from '../../Redux/actions/ActionType';

interface WebcamComponentProps {}


const WebcamComponent: FC<WebcamComponentProps> = () => {
  const videoConstraints = {
    width: 360,
  height: 720,
    facingMode: { exact: "environment" }
  };
  const webcamref = useRef<any>('')
  const [imgSrc, setImgSrc]= useState<string>("")
  const dispatch = useDispatch()

  const capture = useCallback(()=>{
    const imageSrc = webcamref.current!.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamref])

const addCaptureimge = ()=>{
  dispatch({
    type : ADD_TO_CATEGORY,
    key :'image',
    unique : true,
    payload :imgSrc
  })

}
  




  return(
   <div className='w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082] '>
    {
      imgSrc.length ?<> <img src={imgSrc} alt="capture-objet" /><div className="capture_btn p-[1rem] w-[20rem] bg-[#e97813] border border-solid border-black rounded-sm" onClick={()=>addCaptureimge()} > Submit   </div>
 </>  :<> <Webcam videoConstraints={videoConstraints} className=' m-0 border border-solid border-black w-[400px]'ref={webcamref}/> <div className="capture_btn p-[3rem] cursor-pointer bg-white rounded-full" onClick={()=>capture()}>   </div></>
    }
    
    
  </div>)
};

export default WebcamComponent;
