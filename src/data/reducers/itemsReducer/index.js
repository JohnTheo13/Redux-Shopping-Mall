import {
  ITEMS_FETCHING,
  ITEMS_FETCHED,
  CART_UPDATED,
  FAILED_FETCH,
  CLEAR_CART,
} from './actionTypes';

/**
 * Our app's reducer
 * @params fetch... for ui usage
 * @param list the returned list
 * @param cart the items in cart
 */

const initialState = {
  fetching: false,
  fetched: false,
  failedFetch: false,
  list: [],
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCHING:
      return { ...state, fetching: true };
    case ITEMS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        ...action.payload,
      };
    case CART_UPDATED: {
      const { cart, list } = action.payload;
      return {
        ...state,
        cart,
        list,
      };
    }
    case FAILED_FETCH:
      return {
        ...state, failedFetch: true, fetching: false,
      };
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export { initialState };
