import React from "react";
import { styled } from "styled-components";
import "./index.css";
const Card = styled.div`
  width: 762px;
  height: 430px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;
  border-radius: 10px;
`;
const Texts = styled.div`
  display: flex;
`;
const Text1 = styled.h3`
  width: 490px;
  color: #fff;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  text-transform: uppercase;
`;
const Text2 = styled.h3`
  color: #fff;
  text-align: right;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  text-transform: uppercase;
  opacity: 0.5;
`;
const Card1 = () => {
  return (
    <Card className="card">
      <Texts>
        <Text1>
          Bog‘dorchilik va issiqxona xo‘jaliklarini barqaror rivojlanishini
        </Text1>
        <Text2>28 Mart 2023</Text2>
      </Texts>
    </Card>
  );
};

export default Card1;
