import React, { FC, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { ADD_TO_CATEGORY } from '../../Redux/actions/ActionType';
import { useNavigate } from 'react-router-dom';

interface WebcamComponentProps {}


const WebcamComponent: FC<WebcamComponentProps> = () => {
  const navigate = useNavigate()
  const isMobileDevice =()=> {
    return /Mobi|Android|iPhone|iPad|Opera Mini|webOS/i.test(navigator.userAgent);
  }
  
  
  let videoConstraints = {
    width: 340,
  height: 340,
    // facingMode: { exact: "environment" }
    facingMode : isMobileDevice()?{ exact: "environment" } : { exact: "user" }
  };
  
  
  
  
  const webcamref = useRef<any>('')
  const dispatch = useDispatch()
  
  const addCaptureimge = useCallback((imageSrc:string) => {
    dispatch({
      type: ADD_TO_CATEGORY,
      key: 'image',
      unique: true,
      payload: imageSrc,
    });
    navigate("/step2");
  }, [dispatch, navigate,]);

  const capture = useCallback(()=>{
    const imageSrc = webcamref.current!.getScreenshot()

        addCaptureimge(imageSrc)
    
  }, [webcamref,addCaptureimge])


  




  return(
   <div className='w-[90%] mt-[2rem]  flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082] '>
           {/* <div className="capture_btn p-[1rem] mt-[2rem] w-[5rem] bg-[#e97813] border border-solid border-black text-[1.5rem] font-bold rounded-sm" onClick={()=>addCaptureimge()} > Submit   </div> */}
  <Webcam videoConstraints={videoConstraints}  audio={false} width={340} height={340} screenshotFormat="image/jpeg" ref={webcamref}/>
   <div className="capture_btn mt-[1rem] p-[3rem] cursor-pointer bg-white rounded-full" onClick={()=>capture()}>   </div>
    
    
    
  </div>)
};

export default WebcamComponent;
