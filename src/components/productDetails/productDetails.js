import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetails = () => {
 
  const { productId } = useParams();
  console.log(productId);

  const fetchProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products${productId}`)      
    .catch((err) => {
    console.log("error", err);
    });
  }
  return (
    <div>
      ProductDetails
    </div>
  )
}

export default ProductDetails;
