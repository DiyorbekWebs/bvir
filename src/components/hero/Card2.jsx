import React from "react";
import { styled } from "styled-components";
const Card = styled.div`
  width: 538px;
  height: 430px;
  border-radius: 10px;
  display: flex;
  /* justify-content: center; */
  padding: 0px 8px 40px 40px;
  align-items: flex-end;
`;
const Text1 = styled.h3`
  width: 490px;
  color: #fff;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  text-transform: uppercase;
`;
const Card2 = () => {
  return (
    <Card className="card2">
      <Text1>
        Bog‘dorchilik va issiqxona xo‘jaliklarini barqaror rivojlanishini
      </Text1>
    </Card>
  );
};

export default Card2;
