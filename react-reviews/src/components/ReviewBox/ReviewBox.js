import React, { useState } from 'react';
import './ReviewBox.scss';
import people from '../../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const ReviewBox = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };
  const nextPersonHandler = () => {
    let i = index + 1;
    i = checkNumber(i);
    setIndex(i);
  };

  const prevPersonHandler = () => {
    let i = index - 1;
    i = checkNumber(i);
    setIndex(i);
  };

  const randomPersonHandler = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
    }
    randomNumber = checkNumber(randomNumber);
    setIndex(randomNumber);
  };
  return (
    <article className='review'>
      <div className='review__img-container'>
        <img src={image} alt={name} className='review__img-container-person' />
        <span className='review__img-container-quote'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='review__author'>{name}</h4>
      <p className='review__job'>{job}</p>
      <p className='review__info'>{text}</p>
      <div className='review__button-container'>
        <button
          className='review__button-container-prev-btn'
          onClick={prevPersonHandler}
        >
          <FaChevronLeft />
        </button>
        <button
          className='review__button-container-next-btn'
          onClick={nextPersonHandler}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className='review__button-container-random-btn'
        onClick={randomPersonHandler}
      >
        surprise me!
      </button>
    </article>
  );
};

export default ReviewBox;
