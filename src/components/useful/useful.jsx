import React from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import Card from "./Card";
import "./index.css";
const Content = styled.div`
  padding: 120px 0px 150px 0px;
  display: flex;
  flex-direction: column;
  gap: 63px;
`;
const Title = styled.h5`
  color: #141f14;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  line-height: normal;
`;
const Useful = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
   
  };
  return (
    <Content>
      <div className="container">
        <Title>Foydali xavolalar</Title>
      </div>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </Content>
  );
};

export default Useful;
