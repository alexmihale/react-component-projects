import React from 'react';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import './ReviewPage.scss';

const ReviewPage = () => {
  return (
    <section className='container'>
      <div className='container__title'>
        <h2 className='container__title-text'>our reviews</h2>
        <div className='container__title-underline'></div>
      </div>
      <ReviewBox />
    </section>
  );
};

export default ReviewPage;
