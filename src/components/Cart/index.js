// @flow
import React from 'react';
import Total from './Total';
import StyledCart from './StyledCart';
import { ExtendedItem } from '../../types';

/**
 * Convert prices to Numbers we can opperate over
 * @param {*} prices
 */

const Cart = ({ cart }: Array<ExtendedItem>) => (
  <StyledCart>
    <div>
      <div><strong>Items</strong></div>
      <div><strong>Price</strong></div>
    </div>
    {cart.map(({
      title,
      price,
      _id,
    }, index) => (
      <div key={`${_id}${index}`}>
        <div>{title}</div>
        <div>{price}</div>
      </div>
    ))}
    <Total prices={cart.map(({ price }) => Number(price.replace('$', '').replace(',', '')))} />
  </StyledCart>
);

export default Cart;
