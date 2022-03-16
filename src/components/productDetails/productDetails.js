import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/actions/productActions';

const ProductDetails = () => {

  const product = useSelector((state) => state.product)
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)      
    .catch((err) => {
    console.log("error", err);
    });
    dispatch(selectedProduct(res.data))
  }

  useEffect(() => {
    if (productId && productId !== '')
    fetchProductDetail()
  }, [productId])
  console.log(product);
  

  return (
    <div>
      ProductDetails
    </div>
  )
}

export default ProductDetails;
