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
      <Link to={`products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDescription && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}

        <div className={classes.rating}>
          <Rating value={rating ? rating.rate : ""} precision={0.1} />
          <small>{rating ? rating.count : ""} reviews</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to chart</button>
      </div>
    </div>
  );
};

export default ProductCard;
