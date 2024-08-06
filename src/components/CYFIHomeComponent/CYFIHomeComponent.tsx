import React, { FC } from "react";
// import styles from './CYFIHomeComponent.module.css';
import CluesListComponent from "../CluesListComponent/CluesListComponent";
import Header from "../Header/Header";

interface CYFIHomeComponentProps {}

const CYFIHomeComponent: FC<CYFIHomeComponentProps> = () => {
  // const category = useSelector(getCategory);
  // const imageShot = useSelector(getImageShot);

  return (
    <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      {/* <LevelConponent /> */}
      <Header/>
      <h2 className='text-[2.5rem] font-archivo font-bold '>CHOOSE A CATEGORY</h2>
     <CluesListComponent />
      {/* {category  && <QuestionAboutCategoryComponent />} */}
      {/* {category && !imageShot && <QuestionAboutCategoryComponent />} */}
    </div>
  );
};

export default CYFIHomeComponent;
