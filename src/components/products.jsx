import  React from 'react'
import "./style.css"
// const React=require("react");//dont do this (node ma hota ha yeh)
const Product = (title,price,onAddtoCart) => {
    // console.log(props)
    //before destructring object
    // var title=props.title
    // var priceClass=props.price<=500? "green":"yellow"
    // after destructring object
    var priceClass=price<=500? "green":"yellow"
    // const handleAddtoCart=()=>{
    //     alert("add to cart for"+props.title)
    // }
    return ( 
    <div>
    <h1 style={{backgroundColor:"aqua"}}>{title}</h1>
    <p>Product detailS</p>
    <div className={priceClass}>
    <b>Price</b>{price} </div>
    {/* onClick={handleAddtoCart} */}
    <button onClick={()=>{
        onAddtoCart(title)
    }}>Add to cart</button>
    <hr />
    </div> );
}
 
export default Product;