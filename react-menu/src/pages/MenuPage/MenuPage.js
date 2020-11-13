import React, { useState } from 'react';
import Categories from '../../components/Categories/Categories';
import Menu from '../../components/Menu/Menu';
import './MenuPage.scss';
import menu from '../../data';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const MenuPage = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <section className='container'>
      <div className='container__header'>
        <div className='container__header-text'>our menu</div>
        <div className='container__header-underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </section>
  );
};

export default MenuPage;
