import React from 'react';
import Ingredient from './ingredient/Ingredient';

const burger = () => {
  return (
    <div style={{ height: '640px' }}>
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="salad" />
      <Ingredient type="chesse" />
      <Ingredient type="bacon" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
