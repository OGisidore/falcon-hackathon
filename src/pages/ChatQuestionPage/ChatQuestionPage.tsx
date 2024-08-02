import React, { FC } from 'react';
import LevelConponent from '../../components/LevelConponent/LevelConponent';
import QuestionAboutCategoryComponent from '../../components/QuestionAboutCategoryComponent/QuestionAboutCategoryComponent';

interface ChatQuestionPageProps {}

const ChatQuestionPage: FC<ChatQuestionPageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <LevelConponent />
      <h2 className='text-[2.5rem] font-bold '>CAN YOU FIND IT?</h2>
       <QuestionAboutCategoryComponent />
    </div>
  </div>
};

export default ChatQuestionPage;
