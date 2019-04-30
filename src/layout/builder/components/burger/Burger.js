import React from 'react';
import styled from 'styled-components';

import Ingredient from './ingredient/Ingredient';

const burger = ({ className, ingredients }) => {
  const ingredientComponents = Object.entries(ingredients).reduce(
    (accumulator, [ingredient, length]) =>
      accumulator.concat(Array.from({ length }, (_, i) => <Ingredient key={`${ingredient}-${i}`} type={ingredient} />)),
    []
  );
  return (
    <div className={className}>
      <Ingredient type="bread-top" />
      {ingredientComponents}
      {ingredientComponents.length === 0 && <p>Please start adding ingredients</p>}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default styled(burger)`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;
