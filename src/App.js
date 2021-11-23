import React from 'react'
import counter from './components/counter';

import Product from './components/products';
 const handleAddtoCart=(title)=>{
        alert("add to cart for"+title)
    }

function App() {
  return (
    <div >
      <h1 style={{backgroundColor:"Yellow"}}>componenet exapmle</h1>
      <counter/>
      <Product title='Audi' price=":23K" onAddtoCart={handleAddtoCart} />
      <Product title="Civic" price=":23K" onAddtoCart={handleAddtoCart}/>
      <Product  price=":23K" title="Corolla" onAddtoCart={handleAddtoCart}/>
     
    </div>
  );
}

export default App;
