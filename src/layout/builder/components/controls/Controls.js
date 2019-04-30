import React from 'react';
import styled from 'styled-components';
import Control from './control/Control';

const items = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
];

const controls = ({ className, ingredientAdded, ingredientRemoved }) => {
  const added = type => event => ingredientAdded(type);
  const removed = type => event => ingredientRemoved(type);
  return (
    <div className={className}>
      {items.map(item => (
        <Control key={item.type} label={item.label} added={added(item.type)} removed={removed(item.type)} />
      ))}
    </div>
  );
};

export default styled(controls)`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;
