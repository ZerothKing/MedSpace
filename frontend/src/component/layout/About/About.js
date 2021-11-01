import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../../../images/logo1.PNG";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "13vmax", height: "12vmax", margin: "2vmax 0", borderRadius: "0px" }}
              src={logo}
              alt="Founder"
            />
            
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
            The objective of this project is to create an online pharmacy where consumers can purchase medicines and medical instruments. We have many E-commerce websites which  allow us to buy everyday goods and have them delivered directly to our doorstep, but websites that do the same for medicine are not as large or efficient. This mode of purchase was especially helpful during the pandemic when buying goods in person was simply not safe. This project aims to create a convenient platform so that buying medicines is more accessible. 
            </span>
          </div>
          {/* <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
