import React from 'react';
import './Categories.scss';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='category-container'>
      {categories.map((category, index) => (
        <button
          key={index}
          className='category-container__button'
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
