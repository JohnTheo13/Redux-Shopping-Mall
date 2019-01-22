import React, { useState } from 'react';
import StyledItem from './StyledItem';
import Modal from '../Modal';
import Icon from '../Icon';
import DetailedItem from '../DetailedItem.js';

const ListItem = ({
  price,
  image,
  title,
  updateCart,
  _id,
  ...props,
}) => {
  const [show, toggle] = useState(false);

  return (
    <StyledItem>
      <div onClick={() => toggle(!show)} onKeyDown={() => null}>{title}</div>
      <div>{price}</div>
      <img alt="thumb" src={image} />
      <Icon onClick={() => updateCart(_id)} name="add_shopping_cart" />
      <Modal
        show={show}
        close={() => toggle(!show)}
        header={title}
      >
        <DetailedItem addToCart={() => updateCart(_id)} {...props} price={price} />
      </Modal>
    </StyledItem>
  );
};

export default ListItem;
