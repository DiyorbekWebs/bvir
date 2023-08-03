import React from "react";
import { styled } from "styled-components";
import { Title } from "../servic/service";
import { statistic } from "../../constant/statistic";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Content = styled.div`
  padding: 71px 0px 110px 0px;
  background: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
const Div = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1281px) {
    gap: 10px;
  }
`;
const Card1 = styled.div`
  width: 427px;
  padding: 51px 61px 51px 62px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1281px) {
    width: 400px;
    padding: 51px 51px 51px 51px;
  }
`;
const Card1Img = styled.img`
  width: 61px;
  height: 58px;
`;
const Text1 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Statistic = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>STA</Title>
          <Bottom>
            <Div>
              {statistic?.map((e) => {
                return (
                  <>
                    <Card1 key={e.id}>
                      <Card1Img src={e.img} />
                      <Text1>{e.text}</Text1>
                    </Card1>
                  </>
                );
              })}
            </Div>
            <Div>
              <Card2 />
              <Card3 />
            </Div>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Statistic;
