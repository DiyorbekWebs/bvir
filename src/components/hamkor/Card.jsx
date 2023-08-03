import React from "react";
import { styled } from "styled-components";
import { MilliyG } from "../../assets/Img/img";
const Content = styled.div`
  padding: 19px 23px 18px 24px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  border-radius: 16px;
  background: #f4f3f1;
  align-items: center;
  width: 315px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 148px;
  height: 67px;
  flex-shrink: 0;
`;
const Text = styled.p`
  width: 268px;
  color: #141f14;
  text-align: center;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Card = () => {
  return (
    <Content>
      <Img src={MilliyG} />
      <Text>O’zbekiston Respublikasi Prezidentining virtual qabulxonasi</Text>
    </Content>
  );
};

export default Card;
