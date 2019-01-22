// @flow
import React from 'react';
import Icon from '../Icon';
import StyledDetailed from './StyledDetailed';
import { type Item } from '../../types';

type Detailed = {
  addToCart: Function
} & Item

const DetailedItem = ({
  description,
  price,
  addToCart,
  stock: { remaining },
}: Detailed) => (
  <StyledDetailed>
    <p>{description}</p>
    <div>
      <div>Remaining:</div>
      <div>{remaining}</div>
    </div>
    <div>
      <div>Price:</div>
      <div>{price}</div>
    </div>
    <div>
      {remaining > 0
        ? <Icon onClick={addToCart} name="add_shopping_cart" />
        : <span>Not enough in stock</span>
      }
    </div>
  </StyledDetailed>
);

export default DetailedItem;
