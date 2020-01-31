import React, {Component} from 'react';
import axios from 'axios';
import spinner from '../../images/spinner1.gif';
import Search from '../search';
import Dropdown from '../dropdown';
import Products from './products';
import Brand from '../brands/Brand';
import {getData} from '../utilities';
import Pagination from '../Pagination';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {skeleton} from './productSkeleton'

class Product extends Component {
  constructor (props) {
    super (props);
    this.state = {isLoading: true};
  }

  render () {
    return this.props.isLoading
      ? <React.Fragment>
         {skeleton}
        </React.Fragment>:
      //  ? <div className="loader">  ///instead of loader 
        //       {' '}
        //       <img
        //         src={spinner}
        //         width="70px"
        //         style={{marginTop: '6rem'}}
        //         alt="spinner loader"
        //       />
        //       {' '}{' '}
        //     </div>:
        <React.Fragment>
        
          <div className="search-outer d-flex justify-content-between">

            <Dropdown style={{backgroundColor: 'red'}} />
            <Search searchItem={this.props.searchItem} />
          </div>
          <div className="container-fluid top-display main">
            <hr />

            <Brand
              brandFilter={this.oncheckedBrands_Filter}
              brands={this.props.brands}
              isLoading={this.props.isLoading}
              getBrand={this.props.getBrand}
            />
            <div className="right-content">
              <div>
                {/* <div className="product-header"><span style={{fontWeight:700}}>Products</span> ({`${this.state.quantity} items`})</div> */}
              </div>
              {/* <hr /> */}
              <Products
                products={this.props.products}
                getProduct_id={this.props.getProduct_id}
                cartItemsCounts={this.props.cartItemsCount}
              />
              <Pagination getPage={this.props.getPage} />
            </div>
          </div>
        </React.Fragment>;
  }
}
export default Product;

// oncheckedBrands_Filter = checkedBrands => {
//   let brands = [];
//   for (var k in checkedBrands) {
//     // debugger
//     if (checkedBrands[k].length) {
//       brands.push (checkedBrands[k]);
//     }
//   }
//   console.log ('onchecheckedbrand', brands);

//   this.setState ({
//     brands: brands,
//   });
// };

// componentDidMount () {
//   const page = 1, pageSize=6, pageNav = "products";
//   const ProductState =this.state
//   var change =this.setState.bind(this)

//   const changeState=(response)=>{
//     change ({
//       Products: response,
//       isLoading: false,
//       quantity:response.length
//     });
//   }
//   getData(pageNav,page,pageSize,ProductState,changeState)

// }

// console.log(this.state.brands,"brands to filter and show")
// console.log(this.state.quantity,"product quantity")
