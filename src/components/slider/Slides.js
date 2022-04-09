import React from "react";
import Slider from "react-slick";
import "./Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Container className="slider">
      <Slider {...settings}>
        <div className="slide-img">
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
        <div>
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
        <div>
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
        <div>
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
        <div>
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
        <div>
          <img className="slides" src="https://i.ibb.co/5nw6rtH/5.jpg" alt="" />
        </div>
      </Slider>
    </Container>
  );
};
export default Slides;
