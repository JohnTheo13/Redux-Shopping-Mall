// @flow
import React from 'react';

const getTotal = (total: number, num: number): number => total + num;

const expected = (price: number): string => {
  const [integer, decimal] = price.toString().split('.'),
    { length } = integer;
  // For now we assume it wont be more
  if (length > 3) {
    return `${integer.slice(0, -3)},${integer.slice(-3, length)}.${decimal}`;
  }
  return price.toString();
};

const Total = ({ prices }: Array<number>) => {
  const total = expected(prices.reduce(getTotal).toFixed(2));
  return (
    <div>
      <span><strong>Total:</strong></span>
      <span>${total}</span>
    </div>
  );
};

export default Total;
