{
  /* {this.state.Products.map (product => {
          return (
            <div>
              <img
                src={`data:image/jpeg;base64,${product.picture}`}
                alt="img"
              />
            </div>
          );
        })} */
}

/////

// const utilFile = file => {
//   return new Promise((resolve, reject) => {
//     var reader = new FileReader ();
//     reader.onload = () => e => resolve(window.btoa(e.target.result));
//     reader.readAsBinaryString(file);
//   });
// };

////setcartitems using product Id
// props.products.filter((obj) => {
//   var x = obj.brand_title

//   if(retained.indexOf(x.toLowerCase()) === -1) {
//     return false;
//   }
//   console.log(obj.brand_title,"objtitle")
//   return true;
// });

////previous checkbox filter process
// const retained = Object.values (props.checkedBrands);

// var filtered_product = props.products.filter (item => {
//   return retained.length ? retained.indexOf (item.brand_title) > -1 : true;
// });
// var brandIds = [];
// const brandIdonCheck = props.products.filter (prod => {
//   if (retained.length)
//     if (retained.indexOf (prod.brand_title) > -1) {
//       brandIds.push (prod.brand_id);
//     }

//   return brandIds;
// });
// console.log (brandIds, 'checked brands id from products');

// console.log (filtered_product, 'filtered_product');

// if (filtered_product.length) {
//   items = filtered_product;
// } else {
//   items = props.products;
// }

///
// for (let i = 0; i < lcartItems.length; i++) {
//   if ( lcartItems[i].product_id == product_id){
//       let checkVal = (type==="p")?lcartItems[i].stock:lcartItems[i].count
//       let cval = (type==="d")?-1:1
//       let sval = (type==="d")?1:-1
//       if (checkVal > 0) {
//         lcartItems[i].count = lcartItems[i].count + cval;
//         lcartItems[i].stock = lcartItems[i].stock + sval;
//       }       
//       ismatch = true;
//   }
// }
// if (!ismatch) {
// pitem.count = 1;
// lcartItems.push (pitem);
// }

// localStorage.setItem ('cart', JSON.stringify (lcartItems));  