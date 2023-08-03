import React from "react";
import { styled } from "styled-components";
import { FlexCol } from "./Content";
import { Calendar, Download, File, Print } from "../../assets/Img/img";
import { Flex } from "./Content2";
import { agency3 } from "../../constant/agency";
const Box = styled(FlexCol)`
  gap: 10px;
`;
const Card = styled(Flex)`
  gap: 16px;
  padding: 13px 52px 13px 16px;
  border-radius: 8px;
  background: #fff;
`;
const Right = styled(FlexCol)`
  gap: 10px;
`;
const Text1 = styled.p`
  width: 853px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 146.667% */
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 5px;
`;
const Texts1 = styled(Flex)`
  gap: 50px;
`;
const Texts2 = styled(Flex)`
  gap: 15px;
`;
const Content3 = () => {
  return (
    <Box>
      {agency3?.map((e) => (
        <Card key={e.id}>
          <img src={Download} alt="" />
          <Right>
            <Text1>{e.text}</Text1>
            <Texts1>
              <Text2>
                <img src={Print} alt="" />
                Pechat
              </Text2>
              <Texts2>
                <Text2>
                  <img src={File} alt="" />
                  O‘RQ-820-son
                </Text2>
                <Text2>
                  <img src={Calendar} alt="" />
                  27.02.2023
                </Text2>
              </Texts2>
            </Texts1>
          </Right>
        </Card>
      ))}
    </Box>
  );
};

export default Content3;
