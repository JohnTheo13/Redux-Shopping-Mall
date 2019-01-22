import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../data/requests/api';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import { mapStateToProps, mapDispatchToProps } from './statePropsDispatch';
import ListItem from '../../components/ListItem';
import Icon from '../../components/Icon';
import Cart from '../../components/Cart';

const outOfStock = item => item.stock.remaining > 0;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOn: false };
  }

  async componentDidMount() {
    const {
      startFetchingItems, itemsFetched, failedFetch,
    } = this.props;
    startFetchingItems();
    const list = await api.get('api/json/get/4kiDK7gxZ');

    if (list.message) {
      failedFetch();
    } else {
      itemsFetched(list);
    }
  }

  toggleModal = () => this.setState(({ modalOn }) => { // eslint-disable-line
    return { modalOn: !modalOn };
  });

  checkout = () => {
    const { clear } = this.props;
    window.alert('Your shopping cart was sent!');
    this.toggleModal();
    clear();
  }

  render() {
    const { modalOn } = this.state,
      { items: { fetched, list, cart }, updateCart } = this.props;
    return (
      <div>
        <Header>
          <span>Shopping Mall</span>
          <span>
            <Icon name="shopping_cart" onClick={this.toggleModal} />
            <span>{cart.length}</span>
          </span>
        </Header>
        <Modal
          show={modalOn}
          close={this.toggleModal}
          next={{ click: this.checkout, title: 'CHECKOUT' }}
        >
          {cart.length > 0 // eslint-disable-next-line
            ? <Cart cart={cart} />
            : <div>Cart Is Empty</div>
          }
        </Modal>
        {fetched // eslint-disable-next-line
          && list.filter(outOfStock).map(item => <ListItem key={item._id} {...item} updateCart={updateCart} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);