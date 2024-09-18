import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { useParams } from "react-router-dom";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDescription
          // renderAdd
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;
