import React, {useState, useEffect} from 'react';
import {getData} from './utilities';
import emptycart from '../images/emptyCart.gif';
import StripeCheckout from 'react-stripe-checkout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Cart = props => {
  const notify = productsDelete =>
    toast (`${productsDelete.title} 'is deleted'`);
  console.log (props);
  var totalPrice = '';
  let [cartProducts, setCartProduct] = useState ({
    productsList: [],
    count: 0,
  });
  var tPrice = JSON.parse (localStorage.getItem ('totalPrice'));

  const setProduct = product => {
    let products = JSON.parse (localStorage.getItem ('cart'));
    setCartProduct ({
      ...cartProducts,
      productsList: products,
      tPrice,
    });
  };
  const removeItem = item => {
    debugger
    const productsDelete = cartProducts.productsList.filter (items => {
      return items.product_id !== item.product_id;
    });
    setCartProduct ({
      ...cartProducts,
      productsList: productsDelete,
    });
    if (productsDelete.length==0) {
      notify ('Last Item has been removed.');
    } else {
      notify (productsDelete[0]);
    }
  };

  const inPCount = item => {
    props.incCount (item, 'p');

    setProduct (null);
    let product = cartProducts.productsList.filter (prod => {
      return prod.product_id == item.product_id;
    });
    setCartProduct ({
      ...cartProducts,
      count: cartProducts.count + 1,
      price: tPrice,
    });
  };
  const inDCount = item => {
    props.incCount (item, 'd');

    setProduct (null);
    let product = cartProducts.productsList.filter (prod => {
      return prod.product_id == item.product_id;
    });

    setCartProduct ({
      ...cartProducts,
      count: cartProducts.count - 1,
      price: tPrice,
    });
  };
  const handleToken = (token, addresses) => {
    console.log (token, addresses);
  };

  useEffect (
    () => {
      let products = JSON.parse (localStorage.getItem ('cart'));

      totalPrice = products != null
        ? products.reduce ((total, item) => {
            debugger;
            return (total += item.price * item.count);
          }, 0)
        : 0;

      localStorage.setItem ('totalPrice', totalPrice);
      setProduct (products);
    },
    [cartProducts.count]
  );
  useEffect (
    () => {
      debugger;
      localStorage.setItem ('cart', JSON.stringify (cartProducts.productsList));
    },
    [cartProducts.productsList]
  );

  debugger;
  console.log (totalPrice);

  let displaybuyproduct = '';
  displaybuyproduct = cartProducts.productsList != null
    ? cartProducts.productsList.map (item => {
        return (
          <tr key={item.product_id}>

            <td>
              {' '}
              <img
                className="cart-img"
                src={`data:image/jpeg;base64,${item.picture}`}
                alt="img"
              />
            </td>
            <td>{item.title}</td>
            <td>{item.stock}</td>
            <td>
              <div className="input-group quanitit-outer">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default shadow-none shake-bottom"
                    data-type="minus"
                    data-field="quant[1]"
                    onClick={inDCount.bind (this, item)}
                  >
                    <i className="fa fa-minus" aria-hidden="true" />
                  </button>
                </span>
                <input
                  type="text"
                  name="quant[1]"
                  className="form-control input-number quantity shadow-none"
                  value={item.count}
                  min="1"
                  max="10"
                  disabled
                />

                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default btn-number shadow-none shake-bottom"
                    data-type="plus"
                    data-field="quant[1]"
                    onClick={inPCount.bind (this, item)}
                  >
                    <i className="fas fa-plus" />
                  </button>
                </span>
              </div>
            </td>
            <td>
              <i className="fas fa-rupee-sign" />
              {' '}
              {`${item.price * item.count} `}
            </td>
            <td>
              <button
                onClick={removeItem.bind (this, item)}
                className="remove-item"
              >
                <i className="fas fa-trash" />

              </button>
            </td>
          </tr>
        );
      })
    : <h3>Curretly there is no items in the cart</h3>;

  var cartItems;
  if (localStorage) {
    cartItems = localStorage.getItem ('addcartitemsCount');
  }

  return cartProducts.productsList.length !== 0
    ? <React.Fragment>
        <ToastContainer />
        <table className="table table-borderless cart-table mt-5">

          <thead>
            <tr className="cart-thead">
              <th>Item</th>
              <th>Model</th>
              <th>Stock</th>
              <th>Action</th>
              <th>Price</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {displaybuyproduct}
            <tr>
              <td />
              <td />
              <td />
              <td><span style={{float: 'right'}}>Total Price </span></td>
              <td style={{borderTop: '0.8px solid grey'}}>
                <i className="fas fa-rupee-sign" />
                {' '}
                <span>{Number (localStorage.getItem ('totalPrice'))}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{paddingRight: '30px', paddingBottom: '50px'}}>
          {/* <button
            type="button"
            className="btn btn-checkout btn-warning"
            style={{float: 'right'}}
          >
            Checkout
          </button> */}
          <StripeCheckout
            token={handleToken}
            stripeKey="pk_test_hd5uTyhQcb1t8x5c8Kz4pXdT00YjQuBP1d"
            currency="INR"
            amount={Number (localStorage.getItem ('totalPrice')) * 100}
            label={<i class="fas fa-shopping-bag"> CHECKOUT</i>}
            className="btn btn-checkout btn-warning"
            style={{background: 'none'}}
          />
        </div>

      </React.Fragment>
    : <div className=" empty-cart">
        <h2>Cart is empty</h2>
        <h3>
          Add phones to your cart in this new year
          <br />
          {' '}
          <img className="emptyCart" src={emptycart} width="300px" />
          {' '}
        </h3>
      </div>;
};

const mapStateToProps = state => {
  return {
    ...state,
    cartItems: state.cartReducer.cartItems,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setItems: aItem =>
      dispatch (aItem => {
        return {type: 'SET_CARTITEMS', item: aItem};
      }),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Cart);
