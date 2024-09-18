import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <IoLocationOutline />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>

          {/* right side link */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/383px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="flag"
              />
              <select name="" id="">
                <option value="">EN</option>
                <option value="">ES</option>
              </select>
            </Link>

            {/* three components */}
            <Link to={"/auth"}>
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            {/* orders */}
            <Link to={"/orders"}>
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* carts */}
            <Link to={"/cart"} className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
