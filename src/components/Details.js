import React, {Component} from 'react';
import {getData} from '../components/utilities';
import Detail from './detail'

class Details extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickedProduct: [],
    };
  }

  componentDidMount () {
    // const {productId} = this.props;
    debugger
   const  productId = localStorage.getItem("product_Id")
   const linkProduct_Id= this.props.match.params.productId
 console.log(this.props,"product id")
   console.log(productId,"product_id")
    debugger;
    var that = this;
    const pageNav = 'products';
    const getClickedProduct = response => {
      that.setState({
        clickedProduct: response,
      });
    };
    getData(pageNav, '', '', getClickedProduct,linkProduct_Id);
  }

  render () {
    console.log (this.state, 'details state');
    return (
        <React.Fragment>
            <Detail product={this.state.clickedProduct} setItem={this.props.setItem}/>
        </React.Fragment>

    );
  }
}

export default Details;
