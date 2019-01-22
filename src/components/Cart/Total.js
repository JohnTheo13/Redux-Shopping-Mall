import React from 'react';

const getTotal = (total, num) => total + num;
const expected = price => {
  const [integer, decimal] = price.toString().split('.'),
    { length } = integer;
  // For now we assume it wont be more
  if (length > 3) {
    return `${integer.slice(0, -3)},${integer.slice(-3, length)}.${decimal}`;
  }
  return price;
};

const Total = ({ prices }) => {
  const total = expected(prices.reduce(getTotal).toFixed(2));
  return (
    <div>
      <span><strong>Total:</strong></span>
      <span>${total}</span>
    </div>
  );
};

export default Total;
