/* eslint-disable */
import {
  ITEMS_FETCHING,
  ITEMS_FETCHED,
  CART_UPDATED,
  FAILED_FETCH,
  CLEAR_CART,
} from './actionTypes';
import store from '../../store';

const startFetchingItems = () => ({ type: ITEMS_FETCHING }),
  itemsFetched = list => ({ type: ITEMS_FETCHED, payload: { list } }),
  addToCart = (cart, list) => ({ type: CART_UPDATED, payload: { cart, list } }),
  clear = () => ({ type: CLEAR_CART }),
  failedFetch = () => ({ type: FAILED_FETCH });

const updateCart = id => dispatch => {
  const { items: { cart, list } } = store.getState(),
    itemIndex = list.findIndex(item => item._id === id),
    newCart = Array.from(cart),
    newList = Array.from(list);
  newCart.push(list[itemIndex]);
  newList[itemIndex].stock.remaining -= 1;
  dispatch(addToCart(newCart, newList));
}

export {
  startFetchingItems,
  itemsFetched,
  failedFetch,
  updateCart,
  clear,
};
