import {
  startFetchingItems,
  itemsFetched,
  failedFetch,
  clear,
  updateCart,
} from '../../data/reducers/itemsReducer/actions';

const mapStateToProps = ({ items }) => ({ items }),

  mapDispatchToProps = dispatch => ({
    startFetchingItems: () => dispatch(startFetchingItems()),
    itemsFetched: list => dispatch(itemsFetched(list)),
    failedFetch: () => dispatch(failedFetch()),
    clear: () => dispatch(clear()),
    updateCart: id => dispatch(updateCart(id)),
  });

export { mapStateToProps, mapDispatchToProps };
