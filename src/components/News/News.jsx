import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Marquee from "react-fast-marquee";
import { styled } from "styled-components";
import { Title } from "../servic/service";
const Content = styled.div`
  padding-bottom: 150px;
  background-color: #fff;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
const Mar = styled.div`
  display: flex;
  display: flex;
  align-items: flex-start;
`;
const Elem = styled.div`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const News = () => {
  return (
    <Content>
      <div className="container">
        <Title>YANGILIKLAR</Title>
      </div>
      <Marquee gradientColor pauseOnHover speed={30}>
        <Mar>
          <Elem>
            <Card />
          </Elem>
          <Elem>
            <Card2 />
            <Card2 />
          </Elem>
          <Elem>
            <Card />
          </Elem>
          <Elem>
            <Card2 />
            <Card2 />
          </Elem>
          <Elem>
            <Card />
          </Elem>
          <Elem>
            <Card2 />
            <Card2 />
          </Elem>
          <Elem>
            <Card />
          </Elem>
          <Elem>
            <Card2 />
            <Card2 />
          </Elem>
          <Elem>
            <Card />
          </Elem>
          <Elem>
            <Card2 />
            <Card2 />
          </Elem>
        </Mar>
      </Marquee>
    </Content>
  );
};

export default News;
