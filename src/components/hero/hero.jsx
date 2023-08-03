import React from "react";
import { styled } from "styled-components";
import "./index.css";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Content = styled.div`
  background-color: #f5f3ef;
  padding-top: 50px;
`;
const Box = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  padding: 13px 0px 67px 0px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
const Hero = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Cards>
            <Card1 />
            <Card2 />
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Hero;
