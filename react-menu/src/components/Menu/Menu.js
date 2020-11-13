import React from 'react';
import './Menu.scss';

const Menu = ({ items }) => {
  return (
    <div className='menu-container'>
      {items.map((item) => (
        <article className='menu-container__item' key={item.id}>
          <img
            src={item.img}
            alt={item.title}
            className='menu-container__item-photo'
          />
          <div className='menu-container__item-info'>
            <header className='menu-container__item-info-header'>
              <h4 className='menu-container__item-info-header-title'>
                {item.title}
              </h4>
              <h4 className='menu-container__item-info-header-price'>
                ${item.price}
              </h4>
            </header>
            <p className='menu-container__item-info-text'>{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
