import React from "react"
import "./productList.css"
import ProductCard from "../../components/productCard/productCard"
const ProductList =({productList,handleAddToBasket})=>(
    <ul className="productList" >
   {productList.map((product)=>(
   <ProductCard
     product={product}
     key={product.id}
     title={product.title}
     category={product.category}
     id={product.id}
     price={product.price}
     handleAddToBasket={handleAddToBasket}
    />
     ))}
   </ul>
);


export default ProductList
