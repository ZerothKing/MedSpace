import React from "react";
import "./Header.css";
import logo from "./logo.PNG";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to ="/register">
        <div className="header__option">
          <span className="header__optionLineOne">New User?</span>
          <span className="header__optionLineTwo">Start Here</span>
          
        </div>
        </Link>

        {/* <Link to="/login"> */}
        <div className="header__option">
          <Dropdown>
            <Dropdown.Toggle className="dropdown_login" id="dropdown-basic">
              Already Registered?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Customer_login">Customer</Dropdown.Item>
              <Dropdown.Item href="/Seller_login">Retailer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">
            <Link to="/cart">
              <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">
                  0
                </span>
              </div>
            </Link>
          </span>

          <span className="header__optionLineTwo">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
