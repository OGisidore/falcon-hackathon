import React, { FC, Fragment, useRef, useState } from "react";
// import styles from "./QuestionAboutCategoryComponent.module.css";
import WebcamComponent from "../WebcamComponent/WebcamComponent";
import { useSelector } from "react-redux";
import { getImageShot } from "../../Redux/Selector/Selectors";

interface QuestionAboutCategoryComponentProps {}

const QuestionAboutCategoryComponent: FC<
  QuestionAboutCategoryComponentProps
> = () => {
  const [Oncamera, setOnCamera] = useState<boolean>(false);
  const imageShot = useSelector(getImageShot);
const mediaRecorder = useRef<any>(null);
const [recording , setRecording]=useState<boolean>(false)
// 


const mediaStream = useRef<any>(null);
const [recordedUrl, setRecordedUrl] = useState<string>('');

const chunks = useRef<any>([]);
const startRecording = async () => {
  setRecording(true)
  try {
    const stream = await navigator.mediaDevices.getUserMedia(
      { audio: true }
    );
    mediaStream.current = stream;
    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.ondataavailable = (e:any) => {
      if (e.data.size > 0) {
        chunks.current.push(e.data);
      }
    };
    mediaRecorder.current.onstop = () => {
      const recordedBlob = new Blob(
        chunks.current, { type: 'audio/webm' }
      );
      const url = URL.createObjectURL(recordedBlob);
      setRecordedUrl(url);
      chunks.current = [];
    };
    mediaRecorder.current.start();
  } catch (error) {
    console.error('Error accessing microphone:', error);
  }
};
const stopRecording = () => {
  setRecording(true)

  if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
    mediaRecorder.current.stop();
  }
  if (mediaStream.current) {
    mediaStream.current.getTracks().forEach((track:any) => {
      track.stop();
    });
  }
};




// 
   
              
 

  return (
    <Fragment>
      
        <div className="w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  ">
          {
            !imageShot && <> {!Oncamera ?<>  <div className="question">
            
              "FIND SOMETHING ORANGE"
            
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
            </>
          }
          {
            imageShot && <> <div className="congratulattion w-[20rem] flex flex-col items-center ">
                {" "}
                <img
                  className="w-[10rem]"
                  src="assets/images/yellow checkmark.svg"
                  alt=""
                />{" "}
                <p className="text-[2rem] font-bold">
                  GREAT JOB! <br />
                  Tell me something <br />
                  about the image.
                </p>{" "}
              </div>
              <div className="camera w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center">
                {
                  !recording ? <img
              className="w-[3rem]"
              onClick={() => startRecording}
              src="assets/images/microphone-black-shape.svg"
              alt="microphone-photo"
            />:<img
            className="w-[3rem]"
            onClick={() => stopRecording}
            src="assets/images/apple.svg"
            alt="microphone-photo"
          />
                }
            
          </div></>
          }
        
        </div>
      
    </Fragment>
  );
};

export default QuestionAboutCategoryComponent;
