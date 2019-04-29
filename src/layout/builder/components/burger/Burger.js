import React from 'react';
import styled from 'styled-components';

import Ingredient from './ingredient/Ingredient';

const burger = ({ className }) => {
  return (
    <div className={className}>
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="salad" />
      <Ingredient type="cheese" />
      <Ingredient type="bacon" />
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
