import React,{useState,useEffect} from  'react'





const Tooltip =()=>{
    const [citemCount, setItemCount] = useState ({
        count: 0,
        selectedProduct:[]
      });
    
    debugger
      const setProduct=(products)=>{
        setItemCount({
          ...citemCount,
          selectedProduct:products
        })
      }
    useEffect(() => {
     
      var products = JSON.parse (localStorage.getItem ('cart'));
      setProduct(products)
    
    }, [citemCount.selectedProduct])
    let Products='';
   Products= citemCount.selectedProduct.map(item =>{
      return  <div>
          {item.title}
      </div>
    })
    return <React.Fragment>
    <div>
       {Products}
      
    </div>
    </React.Fragment>


}
export default Tooltip;