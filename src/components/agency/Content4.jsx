import React from "react";
import { styled } from "styled-components";
import { Flex } from "./Content2";
import { FlexCol } from "./Content";
import { Download2, File2, Print } from "../../assets/Img/img";
import { agency3 } from "../../constant/agency";
const Box = styled(Flex)`
  gap: 20px;
  flex-wrap: wrap;
`;
const Card = styled(FlexCol)`
  padding: 20px 20px 30px 30px;
  border-radius: 8px;
  background: #fff;
  gap: 80px;
`;
const Text = styled.p`
  width: 234px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
`;
const Icons = styled(Flex)`
  gap: 30px;
`;
const Top = styled(FlexCol)`
  gap: 30px;
  align-items: flex-start;
`;
const Content4 = () => {
  return (
    <Box>
      {agency3?.map((e) => {
        return (
          <Card key={e.id}>
            <Top>
              <img src={File2} alt="" />
              <Text>{e.text}</Text>
            </Top>
            <Icons>
              <img src={Download2} alt="" />
              <img src={Print} alt="" />
            </Icons>
          </Card>
        );
      })}
    </Box>
  );
};

export default Content4;
