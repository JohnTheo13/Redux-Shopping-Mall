// @flow
import React from 'react';

const getTotal = (total: number, num: number): number => total + num;

const expected = (price: number): string => {
  const [integer, decimal] = price.toFixed(2).toString().split('.'),
    { length } = integer;
  // For now we assume it wont be more
  if (length > 3) {
    return `${integer.slice(0, -3)},${integer.slice(-3, length)}.${decimal}`;
  }
  return price.toString();
};

const Total = ({ prices }: { prices: Array<number> }) => {
  const total = expected(prices.reduce(getTotal));
  return (
    <div>
      <span><strong>Total:</strong></span>
      <span>${total}</span>
    </div>
  );
};

export default Total;
