import React from "react";
import { styled } from "styled-components";
import { Icon11, Icon12, Icon13 } from "../../assets/Img/img";
const Card = styled.div`
  padding: 72px 161px 200px 67px;
  width: 426px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Text1 = styled.h3`
  color: #141f14;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  opacity: 0.4000000059604645;
`;
const Card3 = () => {
  return (
    <Card>
      <Item>
        <img src={Icon11} alt="" />
        <Texts>
          <Text1>2400 м²</Text1>
          <Text2>Ajiratilgan yer maydoni</Text2>
        </Texts>
      </Item>
      <Item>
        <img src={Icon12} alt="" />
        <Texts>
          <Text1>2400 mln uzs</Text1>
          <Text2>Ajiratilgan subsidiyalar</Text2>
        </Texts>
      </Item>
      <Item>
        <img src={Icon13} alt="" />
        <Texts>
          <Text1>475 mln uzs</Text1>
          <Text2>Issiqxona uchun subsidiyalar</Text2>
        </Texts>
      </Item>
    </Card>
  );
};

export default Card3;
