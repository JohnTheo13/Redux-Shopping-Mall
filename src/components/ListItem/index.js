// @flow
import React, { useState } from 'react';
import StyledItem from './StyledItem';
import Modal from '../Modal';
import Icon from '../Icon';
import DetailedItem from '../DetailedItem.js';
import { type ExtendedItem } from '../../types';

type ItemType = {
  updateCart: Function
} & ExtendedItem

const ListItem = ({
  price,
  image,
  title,
  updateCart,
  ...props
}: ItemType) => {
  const [show, toggle] = useState(false);

  return (
    <StyledItem>
      <div onClick={() => toggle(!show)} onKeyDown={() => null}>{title}</div>
      <div>{price}</div>
      <img alt="thumb" src={image} />
      <Icon onClick={() => updateCart(props._id)} name="add_shopping_cart" />
      <Modal
        show={show}
        close={() => toggle(!show)}
        header={title}
      >
        <DetailedItem addToCart={() => updateCart(props._id)} {...props} price={price} />
      </Modal>
    </StyledItem>
  );
};

export default ListItem;
