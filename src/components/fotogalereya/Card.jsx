import React from "react";
import { styled } from "styled-components";
import { img7 } from "../../assets/Img/img";
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: 821px) {
    gap: 14px;
}
`;
const Img = styled.img`
  width: 427px;
  height: 260px;
  border-radius: 8px;
  @media screen and (max-width: 1281px) {
    width: 390px;
    height: 240px;
  }
  @media screen and (max-width: 835px) {
    width: 380px;
    height: 230px;
  }
  @media screen and (max-width: 821px) {
    width: 375px;
    height: 220px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 821px) {
    gap: 5px;
}
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
    width: 400px;
  }
  @media screen and (max-width: 835px) {
    width: 380px;
  }
  @media screen and (max-width: 821px) {
    width: 370px;
  }
`;
const Card = ({ img, text1, text2 }) => {
  return (
    <Content>
      <Img src={img7} />
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
