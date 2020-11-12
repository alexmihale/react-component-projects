import React, { useState } from 'react';
import './Question.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfoHandler = () => {
    console.log(showInfo);
    setShowInfo((prevState) => !prevState);
  };
  return (
    <div className='question-container'>
      <div className='question-container__header'>
        <div className='question-container__header-title'>{title}</div>
        <div
          className='question-container__header-button'
          onClick={toggleInfoHandler}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {showInfo ? (
        <>
          <div className='question-container__underline'></div>
          <div className='question-container__body'>{info}</div>
        </>
      ) : null}
    </div>
  );
};

export default Question;
