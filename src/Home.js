import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroup';
import medicines from "./medicines.jpg";
import health from "./health.jpg";
import Button from "react-bootstrap/Button";
import hospital from "./hospital.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://cms-contents.pharmeasy.in/banner/afc7a916c23-02.jpg?dim=1440x0&dpr=1.25&q=100"
          alt=""
        />
      </div>
      <div className="home__links">

        <div className = "Card1">
        <Card style={{ width: "20rem" }}>
          <Card.Img className = "card_image" variant="top" src={medicines} />
          <Card.Body>
            <Card.Title>Order Medicines</Card.Title>
          </Card.Body>

          <Card.Body>
            <Button className = "Ord_med" variant="success">Order Now</Button>
          </Card.Body>
        </Card>
        </div>

        <div className = "Card2">
        <Card style={{ width: "20rem" }}>
          <Card.Img className = "card_image" variant="top" src={health} />
          <Card.Body>
            <Card.Title>HealthCare Products</Card.Title>
          </Card.Body>
          <Card.Body>
            <Button className = "Ord_health" >Order Now</Button>
          </Card.Body>
        </Card>
        </div>

        <div className = "Card3">
        <Card style={{ width: "20rem" }}>
          <Card.Img className = "card_image" variant="top" src={hospital} />
          <Card.Body>
            <Card.Title>Hospitals Near Me</Card.Title>
          </Card.Body>

          <Card.Body >
            <Button className = "Locate_Hosp" >Locate Now</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
