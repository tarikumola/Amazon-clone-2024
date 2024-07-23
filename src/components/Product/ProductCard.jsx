import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
const ProductCard = ({product}) => {
  const {image, title, id, rating,price} = product;
  return (
    <div className={classes.card__container}>
      <a href="#">
        <img src={image} alt="" />
      </a>
      <div>
        <h4>{title}</h4>
        <div className="classes.rating">
          <Rating value={rating.rate} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to chart</button>
      </div>
    </div>
  );
};

export default ProductCard;
