import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import logo from "./logo.PNG";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>
          <div className="banner">
            {/* <h1>Welcome to Medspace</h1> */}
            {/* <h1>FIND PRODUCTS BELOW</h1> */}

            {/* <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a> */}
          </div>

          <img
          className="home__image"
          src="https://cms-contents.pharmeasy.in/banner/afc7a916c23-02.jpg?dim=1440x0&dpr=1.25&q=100"
          alt=""
        />

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
