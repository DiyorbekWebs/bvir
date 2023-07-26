import React from "react";
import { styled } from "styled-components";
import Example from "./according";
const Content = styled.div`
  padding: 80px 0px 223px 0px;
  background: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  gap: 28px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Text1 = styled.h4`
  color: #141f14;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
const Text2 = styled.p`
  width: 419px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`;
const Right = styled.div``;
const Queston = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Left>
            <Text1>Kop berilgan savollar</Text1>
            <Text2>
              O‘zbekiston Respublikasi Prezidentining «O‘zbekiston
              Respublikasida bog‘dorchilik va issiqxona xo‘jaligini yanada
              rivojlantirish chora-tadbirlari to‘g‘risida»
            </Text2>
          </Left>
          <Right>
            <Example />
          </Right>
        </Box>
      </div>
    </Content>
  );
};

export default Queston;
