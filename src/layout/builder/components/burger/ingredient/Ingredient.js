import React from 'react';
import PropTypes from 'prop-types';
import BreadBottom from './breadBottom/BreadBottom';
import BreadTop from './breadTop/BreadTop';
import Bacon from './bacon/Bacon';
import Salad from './salad/Salad';
import Meat from './meat/Meat';
import Cheese from './cheese/Cheese';

const ingredient = ({ type }) => {
  switch (type) {
    case 'bread-bottom':
      return <BreadBottom />;
    case 'bread-top':
      return <BreadTop />;
    case 'salad':
      return <Salad />;
    case 'cheese':
      return <Cheese />;
    case 'meat':
      return <Meat />;
    case 'bacon':
      return <Bacon />;
    default:
      return null;
  }
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;
