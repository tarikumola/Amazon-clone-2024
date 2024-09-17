import React from 'react'
import Carousel from "../../components/carousel/CarouselEffect";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import LayOut from '../../components/LayOut/LayOut';
const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  )
}

export default Landing