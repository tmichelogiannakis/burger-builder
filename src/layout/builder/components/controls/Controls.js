import React from 'react';
import styled, { keyframes } from 'styled-components';
import Control from './control/Control';

// Create the keyframes
const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  :hover,
  :active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }
  :disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }
  :not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;

const items = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
];

const controls = ({ className, disabledInfo, ingredientAdded, ingredientRemoved, purchasable }) => {
  const added = type => event => ingredientAdded(type);
  const removed = type => event => ingredientRemoved(type);
  return (
    <div className={className}>
      {items.map(item => (
        <Control
          key={item.type}
          label={item.label}
          added={added(item.type)}
          removed={removed(item.type)}
          disabled={disabledInfo[item.type]}
        />
      ))}
      <OrderButton disabled={!purchasable}>ORDER NOW</OrderButton>
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
