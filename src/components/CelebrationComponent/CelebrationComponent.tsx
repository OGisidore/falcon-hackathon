// import React, { FC, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface CelebrationComponentProps {}

// const CelebrationComponent: FC<CelebrationComponentProps> = () => {
//   const [recording , setRecording]=useState<boolean>(false)
//   const mediaRecorder = useRef<any>(null);
//   const navigate = useNavigate()
//   const canvasRef = useRef<any>();

// // const [history, setHistory] = useState([]); // Historique local

// //

// const mediaStream = useRef<any>(null);
// const [recordedUrl, setRecordedUrl] = useState<string>('');

// const chunks = useRef<any>([]);

//   // const startRecording = async () => {
//   //   setRecording(true)
//   //   try {
//   //     const stream = await navigator.mediaDevices.getUserMedia(
//   //       { audio: true }
//   //     );
//   //     mediaStream.current = stream;
//   //     mediaRecorder.current = new MediaRecorder(stream);
//   //     mediaRecorder.current.ondataavailable = (e:any) => {
//   //       if (e.data.size > 0) {
//   //         chunks.current.push(e.data);
//   //       }
//   //     };
//   //     mediaRecorder.current.onstop = () => {
//   //       const recordedBlob = new Blob(
//   //         chunks.current, { type: 'audio/mp3' }
//   //       );
//   //       const url = URL.createObjectURL(recordedBlob);
//   //       setRecordedUrl(url);
//   //       chunks.current = [];
//   //     };
//   //     mediaRecorder.current.start();

//   //   } catch (error) {
//   //     console.error('Error accessing microphone:', error);
//   //   }
//   // };

//   const startRecording = async () => {
//     setRecording(true);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaStream.current = stream;

//       // Initialiser l'AudioContext et l'AnalyserNode
//       const audioContext = new (window.AudioContext)();
//       const source = audioContext.createMediaStreamSource(stream);
//       const analyser = audioContext.createAnalyser();
//       source.connect(analyser);
//       analyser.fftSize = 2048;

//       // Préparer pour dessiner les effets sonores en temps réel
//       const bufferLength = analyser.frequencyBinCount;
//       const dataArray = new Uint8Array(bufferLength);
//       const canvas = canvasRef.current;
//       const canvasCtx = canvas.getContext('2d');

//       // Fonction de dessin en temps réel
//       const draw = () => {
//         requestAnimationFrame(draw);
//         analyser.getByteTimeDomainData(dataArray);

//         canvasCtx.fillStyle = '#e97813';
//         canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

//         canvasCtx.lineWidth = 2;
//         canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
//         canvasCtx.beginPath();

//         const sliceWidth = canvas.width / bufferLength;
//         let x = 0;

//         for (let i = 0; i < bufferLength; i++) {
//           const v = dataArray[i] / 128.0;
//           const y = v * canvas.height / 2;

//           if (i === 0) {
//             canvasCtx.moveTo(x, y);
//           } else {
//             canvasCtx.lineTo(x, y);
//           }
//           x += sliceWidth;
//         }

//         canvasCtx.lineTo(canvas.width, canvas.height / 2);
//         canvasCtx.stroke();
//       };

//       draw(); // Démarrer le dessin en temps réel

//       // Initialiser le MediaRecorder pour l'enregistrement
//       mediaRecorder.current = new MediaRecorder(stream);
//       mediaRecorder.current.ondataavailable = (e:any) => {
//         if (e.data.size > 0) {
//           chunks.current.push(e.data);
//         }
//       };
//       mediaRecorder.current.onstop = () => {
//         const recordedBlob = new Blob(chunks.current, { type: 'audio/mp3' });
//         const url = URL.createObjectURL(recordedBlob);
//         setRecordedUrl(url);
//         chunks.current = [];
//         audioContext.close(); // Fermer l'AudioContext
//       };
//       mediaRecorder.current.start();
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   };

// //
//         const stopRecording = () => {
//           setRecording(false)

//           if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
//             mediaRecorder.current.stop();
//           }
//           if (mediaStream.current) {
//             mediaStream.current.getTracks().forEach((track:any) => {
//               track.stop();
//             });
//             console.log(recordedUrl);

//           }

//           fetch(recordedUrl)
//           .then(response => response.blob())
//           .then(blob => {
//             const formData = new FormData();
//             formData.append('audio', blob, 'recording.mp3'); // Nommer le fichier comme souhaité

//             // Envoyer le fichier au backend via fetch
//             return fetch('http://localhost:5000/api/step2', {
//               method: 'POST',
//               body: formData,
//             });
//           })
//           .then(response => response.json())
//           .then(output => {
//             console.log('Response from backend:', output);
//             navigate('/final');
//           })
//           .catch(error => {
//             console.error('Error submitting audio:', error);
//           });

//           navigate('/final')

//         };

//   return  <div className="w-[90%]  mt-[5rem] flex flex-col items-center justify-evenly  min-h-[50vh]  p-1 bg-[#156082]  ">
//     <div className="congratulattion w-[20rem] flex flex-col items-center ">
//                 {" "}
//                 {
//                   !recording && <><img
//                   className="w-[10rem]"
//                   src="assets/images/yellow checkmark.svg"
//                   alt=""
//                 />{" "}
//                 <p className="text-[2rem] font-bold">
//                   GREAT JOB! <br />
//                   Tell me something <br />
//                   about the image.
//                 </p>{" "}

//                   </>
//                 }
//                 {
//                   recording &&  <canvas ref={canvasRef} width="300" height="150" />
//                 }
//                 </div>

//               <div className="microphone w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center">
//                 { !recording &&
//                   <img
//               className="w-[3rem]"
//               onClick={startRecording}
//               src="assets/images/microphone-black-shape.svg"
//               alt="microphone-photo"
//             />
//                 }
//                 {
//                   recording && <img
//             className="w-[3rem]"
//             onClick={() => stopRecording()}
//             src="assets/images/pause-02.svg"
//             alt="microphone-photo"
//           />
//                 }

//           </div>
//   </div>
// };

// export default CelebrationComponent;
import React, { FC, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getquestColor, getResponseColor } from "../../Redux/Selector/Selectors";

interface CelebrationComponentProps {}

const CelebrationComponent: FC<CelebrationComponentProps> = () => {
  const [recording, setRecording] = useState<boolean>(false);
  const mediaRecorder = useRef<any>(null);
  const mediaStream = useRef<any>();
  const [recordedUrl, setRecordedUrl] = useState<string>("");
  const canvasRef = useRef<any>();
  const chunks = useRef<Blob[]>([]);                                
  const dataObject = useSelector(getResponseColor);
  const colorofquest = useSelector(getquestColor)
  const navigate = useNavigate();

  const startRecording = async () => {
    setRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;

      // Initialiser l'AudioContext et l'AnalyserNode
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.fftSize = 2048;

      // Préparer pour dessiner les effets sonores en temps réel
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvas = canvasRef.current;
      const canvasCtx = canvas?.getContext("2d");

      const draw = () => {
        if (canvasCtx) {
          requestAnimationFrame(draw);
          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = "#e97813";
          canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = "rgb(0, 0, 0)";
          canvasCtx.beginPath();

          const sliceWidth = canvas.width / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvas.height) / 2;

            if (i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
          }

          canvasCtx.lineTo(canvas.width, canvas.height / 2);
          canvasCtx.stroke();
        }
      };

      draw();

      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: "audio/mp3" });
        const url = URL.createObjectURL(recordedBlob);
        setRecordedUrl(url);
        chunks.current = [];
        audioContext.close(); // Fermer l'AudioContext
      };
      mediaRecorder.current.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    setRecording(false);

    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track: any) => {
        track.stop();
      });
    }

    if (recordedUrl) {
      fetch(recordedUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const formData = new FormData();
          formData.append("audio", blob, "recording.mp3"); // Nommer le fichier comme souhaité

          return fetch("http://localhost:5000/api/step2", {
            method: "POST",
            body: formData,
          });
        })
        .then((response) => response.json())
        .then((output) => {
          console.log("Response from backend:", output);
          navigate("/final");
        })
        .catch((error) => {
          console.error("Error submitting audio:", error);
        });
    } else {
      console.error("No recorded URL to submit.");
    }
  };

  return (
    <div className="w-[90%] mt-[5rem] flex flex-col items-center justify-evenly min-h-[50vh] p-1 bg-[#156082]">
      <div className="congratulattion w-[20rem] flex flex-col items-center">
        {!recording && (
          <>
            <img
              className="w-[10rem]"
              src="assets/images/yellow checkmark.svg"
              alt=""
            />
            <p className="text-[2rem] font-bold">
              {colorofquest.trim() === dataObject.colors[0].color.trim() ? " GREAT JOB!  <br /> Tell me something <br /> about the image.": "THIS IS A  {dataObject.colors[0].color} COLOR <br />Tell me something <br />about the image." }
              
            </p>
          </>
        )}
        {recording && <canvas ref={canvasRef} width="300" height="150" />}
      </div>

      <div className="microphone w-[5rem] h-[5rem] bg-white rounded-full border border-solid border-black flex justify-center items-center">
        {!recording && (
          <img
            className="w-[3rem]"
            onClick={startRecording}
            src="assets/images/microphone-black-shape.svg"
            alt="microphone-photo"
          />
        )}
        {recording && (
          <img
            className="w-[3rem]"
            onClick={stopRecording}
            src="assets/images/pause-02.svg"
            alt="microphone-photo"
          />
        )}
      </div>
    </div>
  );
};

export default CelebrationComponent;
