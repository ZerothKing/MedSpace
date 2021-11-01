import React, { Fragment, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const ConfirmOrder = () => {

    const [user, setUser] = useState("sanjkeet");
    const [cartItems, setcartItems] = useState([{product:"facemasasdk", image:"asd#", name:"sjmasdaask", quantity: 2342, price: 243400}]);
    const [shippingInfo, setshippingInfo] = useState({address: "22b bdsfsdfaker street", city: "lodsdfndon", state:"lonsdfsdon", pincode:"000112111", country:"dfsUk"});

    useEffect(() => {
        let isMounted = true;
        fetch('apicall')
        .then(res => res.json())
        .then(({userData, cartData, shippingData}) => {
            setUser(userData);
            setcartItems(cartData);
            setshippingInfo(shippingData);
        });
    }, []);

  const subtotal = 0;

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  return (
    <Fragment>
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <a href="#">
                      {item.name}
                    </a>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
