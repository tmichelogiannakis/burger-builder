import React from 'react';

const orderSummary = ({ ingredients, className }) => {
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.entries(ingredients).map(([key, value]) => (
          <li key={key}>
            <span style={{ textTransform: 'capitalize' }}>{key}:</span> {value}
          </li>
        ))}
      </ul>
      <p>Continue to checkout?</p>
    </>
  );
};

export default orderSummary;
