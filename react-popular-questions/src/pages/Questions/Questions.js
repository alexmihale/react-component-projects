import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import './Questions.scss';
import questionsData from '../../data';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  return (
    <div className='container'>
      <div className='container__header'>questions and answers about login</div>
      <div className='container__body'>
        {questions.map((question) => {
          const { id, title, info } = question;
          return <Question key={id} id={id} title={title} info={info} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
