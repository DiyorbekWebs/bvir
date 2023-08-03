import React from "react";
import { FlexCol } from "./Content";
import { styled } from "styled-components";
import { Icon14, Mail } from "../../assets/Img/img";
import { agency2 } from "../../constant/agency";
export const Flex = styled.div`
  display: flex;
  gap: 0px;
`;
const Box = styled.div`
  width: 985px;
  padding: 0px 39px 67px 39px;
  border-radius: 12px;
  background: #fff;
`;

const Img = styled.img`
  width: 196px;
  height: 202px;
  border-radius: 8px;
  background-color: aliceblue;
`;
const Texts1 = styled(FlexCol)`
  gap: 10px;
`;
const Text1 = styled.h4`
  color: #000;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text2 = styled.p`
  width: 533px;
  color: #000;
  font-family: Open Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
`;
const Card = styled(Flex)`
  gap: 30px;
  align-items: center;
  padding: 30px 0px;
  border-bottom: 1px solid #e4e0da;
`;
const Right = styled(FlexCol)`
  gap: 28px;
`;
const Text3 = styled.h5`
  color: #000;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 10px;
`;
const Content2 = () => {
  return (
    <Box>
      {agency2?.map((e) => (
        <Card key={e.id}>
          <Img />
          <Right>
            <Texts1>
              <Text1>{e.name}</Text1>
              <Text2>{e.text}</Text2>
            </Texts1>
            <Texts1>
              <Text3>
                <img src={Icon14} alt="" />
                {e.phone}
              </Text3>
              <Text3>
                <img src={Mail} alt="" />
                {e.mail}
              </Text3>
            </Texts1>
          </Right>
        </Card>
      ))}
    </Box>
  );
};

export default Content2;
