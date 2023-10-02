import React from "react";
import { styled } from "styled-components";
import { img7 } from "../../assets/Img/img";
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;
const Videoo = styled.video`
  width: 427px;
  height: 260px;
  border-radius: 8px;
  background-color: lightgray;
  @media screen and (max-width: 1281px) {
    width: 390px;
    height: 240px;
  }
  @media screen and (max-width: 835px) {
    width: 375px;
    height: 225px;
  }
  @media screen and (max-width: 821px) {
    width: 375px;
    height: 220px;
    gap: 10px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Text1 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 22.1px */
  opacity: 0.4000000059604645;
`;
const Text2 = styled.h4`
  width: 427px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 22.1px */
  @media screen and (max-width: 1281px) {
    width: 399px;
  }
  @media screen and (max-width: 821px) {
    width: 380px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  }
`;
const Card = ({ img, text1, text2 }) => {
  return (
    <Content>
      <Videoo>
        <source src="" />
      </Videoo>
      <Texts>
        <Text1>09:40</Text1>
        <Text2>
          Xorazmda brokkoli karami eksporti yoʻlga qoʻyilmoqda xo‘jaligi
          sohasida yetishtirilayotg
        </Text2>
      </Texts>
    </Content>
  );
};

export default Card;
