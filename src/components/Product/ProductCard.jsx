import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product, flex, renderDescription }) => {
  const { image, title, id, rating, price, description } = product;
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h4>{title}</h4>
        {renderDescription && (
          <div style={{ maxWidth: "650px"}}>{description}</div>
        )}

        <div className="classes.rating">
          <Rating value={rating?.rate} />
          <small>{rating?.count}</small>
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
