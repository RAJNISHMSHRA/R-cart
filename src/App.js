import React, {Component} from 'react';

import {getData} from './components/utilities';
import Cart from './components/Cart';
import Brand from './components/brands/Brand';
import Details from './components/Details';
import Product from './components/products/product';
import PushProduct from './components/PushProduct';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  brand_id = [];
  addedP_id = [];
  localPId = [];
  ismatch = false;
  state = {
    Products: [],
    brands: [],
    isLoading: true,
    pageNo: 1,
    CBrand_id: [],
    CartItems: [],
    cartItemsCount: 0,
    no_ofItems: 0,
    p_ids: [],
  };
  getPage = pageno => {
    this.setState ({
      pageNo: pageno,
    });
  };
  searchProductItem = value => {
    console.log (value, 'search');
    let pageNav = 'products';
    const that = this;
    const changeStateProduct = response => {
      that.setState ({
        Products: response,
        isLoading: false,
      });
    };
    if (value.length > 0) {
      getData (pageNav, null, null, changeStateProduct, null, '', value);
    } else if (value == '') {
      const pageNavProducts = 'products', page = 1, pageSize = 6;
      getData (pageNavProducts, page, pageSize, changeStateProduct);
    }
  };

  setClickedProductId = Product_id => {
    debugger;
    this.setState ({
      CProduct_id: Product_id,
    });
  };
  setCartItemCount = (pitem, type) => {
    let ismatch = false;
    const {product_id} = pitem;
    let lcartItems = JSON.parse (localStorage.getItem ('cart'));

    if (!lcartItems) {
      lcartItems = [];
    }

    for (let i = 0; i < lcartItems.length; i++) {
      if (lcartItems[i].product_id == product_id) {
        if (type == 'p') {
          let maxCount = lcartItems[i].stock;
          if (maxCount != 0) {
            lcartItems[i].count = lcartItems[i].count + 1;
            lcartItems[i].stock -= 1;
          }
        } else if (type == 'd') {
          let minCount = lcartItems[i].count;
          if (minCount > 0) {
            lcartItems[i].count = lcartItems[i].count - 1;
            lcartItems[i].stock += 1;
          }
        }
        ismatch = true;
      }
    }
    if (!ismatch) {
      pitem.count = 1;
      lcartItems.push (pitem);
    }

    const existingItems = localStorage.length > 0
      ? lcartItems.filter (item => item.product_id == product_id)
      : 0;
    if (existingItems.length > 0) {
      this.setState (
        {
          ...this.state,

          CartItems: lcartItems,
        },
        () => {
          localStorage.setItem ('cart', JSON.stringify (lcartItems));
        }
      );
    } else {
      var addedItems = [];
      localStorage.length > 0
        ? (addedItems = lcartItems.concat (pitem))
        : (addedItems = addedItems.concat (pitem));

      this.setState (
        {
          ...this.state,
          CartItems: addedItems,
          cartItemsCount: this.state.cartItemsCount + 1,
          no_ofItems: this.state.no_ofItems + 1,
        },
        () => {
          localStorage.setItem ('cart', JSON.stringify (this.state.CartItems));
          localStorage.setItem ('cartitem', this.state.cartItemsCount);
          localStorage.setItem ('itemsCount', this.state.no_ofItems);
        }
      );
    }
  };
  filterProductOnChecked = e => {
    debugger;
    const {checked} = e.target;
    if (checked) {
      let Brand_id = [...this.state.CBrand_id];
      Brand_id.push (e.target.dataset.brand_id);
      this.setState ({
        CBrand_id: Brand_id,
      });
    } else {
      const unchekd = this.state.CBrand_id.filter (ids => {
        return ids !== e.target.dataset.brand_id;
      });
      this.setState ({
        CBrand_id: unchekd,
      });
    }
  };
  componentDidMount () {
    let lcartItems = JSON.parse (localStorage.getItem ('cart'));
    if (lcartItems) {
      this.setState ({
        CartItems: lcartItems,
      });
    }

    this.getProduct ();
  }
  componentDidUpdate (prevProps, prevState) {
    const {pageNo} = this.state;
    let CBrand_id = [...this.state.CBrand_id];
    if (
      prevState.pageNo !== pageNo ||
      prevState.CBrand_id != this.state.CBrand_id
    ) {
      const page = pageNo, pageSize = 6, pageNavProducts = 'products';
      var that = this;
      // const change =this.setState.bind(this)

      const changeStateProduct = response => {
        that.setState ({
          Products: response,
          isLoading: false,
        });
      };
      getData (
        pageNavProducts,
        page,
        pageSize,
        changeStateProduct,
        '',
        CBrand_id
      );
    }
  }

  getProduct = () => {
    const page = this.state.pageNo,
      pageSize = 6,
      pageNav = 'brands',
      brandpage = 1,
      pageNavProducts = 'products';
    var that = this;

    const changeStateProduct = response => {
      that.setState ({
        Products: response,
        isLoading: false,
      });
    };
    const changeState = data => {
      that.setState ({
        brands: data,
      });
    };
    getData (pageNavProducts, page, pageSize, changeStateProduct);
    getData (pageNav, brandpage, pageSize, changeState);
  };

  render () {
    let {Products, isLoading, brands, CProduct_id} = this.state;
    const {filterProductOnChecked, setCartItemCount} = this;

    return (
      <div className="App">
        <Navbar count={this.state.CartItems.length} />
        <Switch>
          <Route
            exact
            path={'/'}
            render={props => (
              <Product
                {...props}
                products={Products}
                isLoading={isLoading}
                brands={brands}
                getPage={this.getPage}
                getProduct_id={this.setClickedProductId}
                getBrand={filterProductOnChecked}
                cartItemsCount={setCartItemCount}
                searchItem={this.searchProductItem}
              />
            )}
          />
          <Route
            exact
            path={'/brands'}
            render={props => <Brand {...props} brands={brands} />}
          />
          <Route exact path="/addproduct" component={PushProduct} />
          <Route
            path={'/details/:productId'}
            render={props => (
              <Details
                {...props}
                productId={CProduct_id}
                setItem={this.setCartItemCount}
              />
            )}
          />
          <Route
            path={'/cart'}
            render={props => (
              <Cart
                {...props}
                cartItemsCount={this.state.cartItemsCount}
                addeProduct={this.props.addeProduct}
                incCount={this.setCartItemCount}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    addedProduct: state.prod.Products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoadingCheck: () => dispatch ({type: 'CHANGE_ISLOADING'}),
    getProductonLoad: () => dispatch ({type: 'LOAD_PRODUCT'}),
    setProductData: data => dispatch ({type: 'SET_PRODUCT', products: data}),
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (App);
