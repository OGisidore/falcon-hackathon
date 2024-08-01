import React, { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CelebrationComponentProps {}

const CelebrationComponent: FC<CelebrationComponentProps> = () => {
  const [recording , setRecording]=useState<boolean>(false)
  const mediaRecorder = useRef<any>(null);
  const navigate = useNavigate()
// const [history, setHistory] = useState([]); // Historique local

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

// 
const stopRecording = () => {
  setRecording(false)

  if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
    mediaRecorder.current.stop();
  }
  if (mediaStream.current) {
    mediaStream.current.getTracks().forEach((track:any) => {
      track.stop();
    });
    console.log(recordedUrl);
    
  }
  navigate('/final')

};

  
  return  <div className="w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  ">
    <div className="congratulattion w-[20rem] flex flex-col items-center ">
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
              <div className="microphone w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center">
                { !recording &&
                   <img
              className="w-[3rem]"
              onClick={startRecording}
              src="assets/images/microphone-black-shape.svg"
              alt="microphone-photo"
            /> 
                }
                {
                  recording && <img
            className="w-[3rem]"
            onClick={() => stopRecording()}
            src="assets/images/apple.svg"
            alt="microphone-photo"
          />
                }
            
          </div>
  </div>
};

export default CelebrationComponent;
