import React from "react";
import Chart from "./Chart";
import { styled } from "styled-components";
const Card = styled.div`
  padding: 42px 64px 36px 60px;
  display: flex;
  flex-direction: column;
  gap: 62px;
  border-radius: 16px;
  background: #fff;
`;
const Div = styled.div`
  display: flex;
  gap: 190px;
  @media screen and (max-width: 1281px) {
    gap: 125px;
  }
`;
const Texts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Items = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Item1 = styled.h6`
  color: #141f14;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Item2 = styled.p`
  width: 221px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Items2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Item = styled.li`
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Color1 = styled.div`
  border-radius: 4px;
  background: #3dafb7;
  width: 20px;
  height: 20px;
`;
const Color2 = styled(Color1)`
  background: #2c4da4;
`;
const Color3 = styled(Color1)`
  background: #d16eff;
`;

const Card2 = () => {
  return (
    <Card>
      <Div>
        <Chart />
        <Texts>
          <Items>
            <Item1>2545</Item1>
            <Item2>Umumiy kelish tushgan arizalar</Item2>
          </Items>
          <Items>
            <Item1>255</Item1>
            <Item2>Hal qilingan arizalar</Item2>
          </Items>
          <Items>
            <Item1>2000</Item1>
            <Item2>Korib chiqlayotgan arizalar</Item2>
          </Items>
          <Items>
            <Item1>50</Item1>
            <Item2>Rad etilgan arizalar</Item2>
          </Items>
        </Texts>
      </Div>
      <Status>
        <Items2>
          <Color1 />
          <Item>Korib chiqilmoqda</Item>
        </Items2>
        <Items2>
          <Color2 />
          <Item>Rad qilingan</Item>
        </Items2>
        <Items2>
          <Color3 />
          <Item>Hal qilingan</Item>
        </Items2>
      </Status>
    </Card>
  );
};

export default Card2;
