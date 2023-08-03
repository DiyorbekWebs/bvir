import React from "react";
import { styled } from "styled-components";
const CardBox = styled.div`
  width: 315px;
  height: 207px;
  padding: 25px 28px 44px 40px;
  border-radius: 12px;
  background: #f4f3f1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  transition: 1s;
  cursor: pointer;
  box-shadow: 0 0 10 10px grey;

  &:hover {
    transition: 1s;
  }
  @media screen and (max-width: 1281px) {
    width: 297px;
    height: 192px;
    padding: 25px 25px 44px 30px;
  }
`;
const Text1 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text2 = styled.p`
  width: 257px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.699999988079071;
`;
const Card = ({ img, text1, text2 }) => {
  return (
    <CardBox>
      <img src={img} alt="" />
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
    </CardBox>
  );
};

export default Card;
