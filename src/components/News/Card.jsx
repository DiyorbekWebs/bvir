import React from "react";
import { styled } from "styled-components";
import { img3 } from "../../assets/Img/img";
const Content = styled.div`
  border-radius: 8px;
  background: #f5f3ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 538px;
`;
const Img = styled.img`
  width: 538px;
  height: 375px;
`;
const Texts = styled.div`
  padding: 20px 29px 57px 20px;
  background-color: #f5f3ef;
  display: flex;
  gap: 18px;
  flex-direction: column;
  border-radius: 8px;

`;
const Text = styled.h4`
  width: 489px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 118.182% */
`;
const Time = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6000000238418579;
`;
const Card = () => {
  return (
    <Content>
      <Img src={img3} alt="" />
      <Texts>
        <Text>Issiqxonalarda qancha maydonda qulupnay yetishtirilmoqda?</Text>
        <Time>10:42</Time>
      </Texts>
    </Content>
  );
};

export default Card;
