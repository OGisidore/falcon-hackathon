import React, { FC } from "react";
// import styles from './CYFIHomeComponent.module.css';
import LevelConponent from "../LevelConponent/LevelConponent";
import CluesListComponent from "../CluesListComponent/CluesListComponent";
import { getCategory } from "../../Redux/Selector/Selectors";
import { useSelector } from "react-redux";
import QuestionAboutCategoryComponent from "../QuestionAboutCategoryComponent/QuestionAboutCategoryComponent";

interface CYFIHomeComponentProps {}

const CYFIHomeComponent: FC<CYFIHomeComponentProps> = () => {
  const category = useSelector(getCategory);
  // const imageShot = useSelector(getImageShot);

  return (
    <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <LevelConponent />
      {!category && <CluesListComponent />}
      {category  && <QuestionAboutCategoryComponent />}
      {/* {category && !imageShot && <QuestionAboutCategoryComponent />} */}
    </div>
  );
};

export default CYFIHomeComponent;
