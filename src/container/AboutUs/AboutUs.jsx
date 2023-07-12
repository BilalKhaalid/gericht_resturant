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
          At Gericht, we are more than just a restaurant. We are a culinary
          institution with a rich history that spans decades. Established in
          2010, we have been passionately serving exceptional cuisine and
          creating unforgettable dining experiences for our esteemed guests.
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
          Our journey began with a vision to redefine gastronomy, to push
          boundaries, and to elevate the art of dining. With a team of skilled
          chefs, dedicated staff, and a commitment to sourcing the finest
          ingredients, we have earned a reputation for culinary excellence.
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
