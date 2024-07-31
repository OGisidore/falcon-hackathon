import React, { FC, Fragment, useState } from "react";
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
            <img
              className="w-[3rem]"
              onClick={() => setOnCamera(true)}
              src="assets/images/microphone-black-shape.svg"
              alt="microphone-photo"
            />
          </div></>
          }
        
        </div>
      
    </Fragment>
  );
};

export default QuestionAboutCategoryComponent;
