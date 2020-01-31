import React from 'react';
import axios from 'axios';
// import PushProduct from '../utilities/utilities';


class PushProduct extends React.Component{
  state = {
    brand_title: '',
    brand_id: '',
    picture: '',
    title: '',
    description: '',
    stock: '',
    price: '',
  };
 change = e => {
      var target = e.target;
      const {name, value, type} = target;
      if (target.type === 'file'){
        console.log ('file is executing');
        var base64String = '';
        var f = e.target.files[0]; // FileList object
        var reader = new FileReader ();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
          return function (evnt) {
            var binaryData = evnt.target.result;
            //Converting Binary Data to base 64
            base64String = window.btoa (binaryData);
            //showing file converted to base64
            // document.getElementById('base64').value = base64String;
            alert ('File converted to base64 successfuly!\nCheck in Textarea');
            setimg (base64String);
            console.log(base64String)
          };
        })(f);
        // Read in the image file as a data URL.
        reader.readAsBinaryString (f);
        const setimg = base64String => {
          this.setState({
            picture: base64String,
          });
        };

      } else {
        console.log ('except file im executed');
        this.setState({
          [name]: type === 'number' ? Number (value) : value,
        });
        
       
      }
    }

  onSubmitProduct = e => {
    e.preventDefault();
    console.log(this.state)
    JSON.parse(JSON.stringify(this.state));
    const products = {
      ...JSON.parse(JSON.stringify(this.state)),
        
    }
    const config = {
      method: 'post',
      url: 'https://merck-mitc-react-training-2019.herokuapp.com/APIs/products',
      headers: {
        'x-secret-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudF9pZCI6NSwiaWF0IjoxNTc3Nzc0MzIwfQ.--1gSkEBEkjJFyyO__Z1Rrrp6TukjlZF3QbF8hY-tfo',
      },
      data: products,
    };
    axios (config).then(response => {
      console.log (response.data)
    });

  }
render(){
  return (
    
    <React.Fragment>
      <form onSubmit={this.onSubmitProduct} className="addItemApi">
        <label htmlFor="brand_title">Brand Title :</label>
        <input
          type="text"
          id="brand_title"
          name="brand_title"
          onChange={this.change}
          className="form-control addInput"
        />
        <label htmlFor="brand_id">Brand ID :</label>
        <input
          type="number"
          id="brand_id"
          name="brand_id"
          onChange={this.change}
          className="form-control addInput"
        />
        <label htmlFor="picture">Pictures :</label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={this.change}
          className="form-control file addInput"
        />

        <label htmlFor="title">Title :</label>
        <input type="text" id="title" name="title" onChange={this.change}   className="form-control addInput"/>
        <label htmlFor="description">Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.change}
          className="form-control addInput"
        />
        <label htmlFor="stock">Stock :</label>
        <input type="number" id="stock" name="stock" onChange={this.change}   className="form-control addInput"/>
        <label htmlFor="price">Price :</label>
        <input type="number" id="price" name="price" onChange={this.change}   className="form-control addInput"/>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};
}
export default PushProduct;
