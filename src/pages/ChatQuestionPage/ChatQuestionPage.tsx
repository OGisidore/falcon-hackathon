import React, { FC } from 'react';
import QuestionAboutCategoryComponent from '../../components/QuestionAboutCategoryComponent/QuestionAboutCategoryComponent';
import Header from '../../components/Header/Header';

interface ChatQuestionPageProps {}

const ChatQuestionPage: FC<ChatQuestionPageProps> = () => {
  return <div className='w-full  flex flex-col gradient items-center h-[100vh]'>
     <div className="container min-h-[100vh] w-[100%] md:max-w-[1200px] pt-8  flex flex-col items-center bg-[#156082] md:h-[90vh]">
      <Header />
       <QuestionAboutCategoryComponent />
    </div>
  </div>
};

export default ChatQuestionPage;
