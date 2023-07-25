import React from "react";
import { styled } from "styled-components";
const Card = styled.div`
  width: 437px;
  height: 265px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  padding: 0px 57px 10px 20px;
  flex-direction: column;
  gap: 4px;
`;
const Text1 = styled.h3`
  width: 360px;
  color: #fff;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 117.647% */
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
const Card2 = () => {
  return (
    <Card className="card2">
      <Text1>
        Bog‘dorchilik va issiqxona xo‘jaliklarini barqaror rivojlanishini
      </Text1>
      <Time>10:42</Time>
    </Card>
  );
};

export default Card2;
