import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__about-us app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__about-us-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__about-us-content flex__center">
      <div className="app__about-us-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
          quis architecto!
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>

      <div className="app__about-us_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__about-us-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum
          quis architecto!
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
