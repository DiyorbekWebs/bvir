import React from "react";
import { styled } from "styled-components";
import { Time } from "../News/Card";
import { agency1 } from "../../constant/agency";
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
const Box = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
const Card1 = styled(FlexCol)`
  padding: 40px 5px 23px 5px;
  border-radius: 12px;
  gap: 25px;
  align-items: center;
  background: #fff;
`;
const Text1 = styled.h1`
  color: #282828;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px; /* 121.875% */
  width: 572px;
`;
const Img = styled.img`
  width: 640px;
  height: 400px;
  background-color: aliceblue;
`;
const Text2 = styled.div`
  width: 573px;
  color: #282828;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Texts1 = styled(FlexCol)`
  gap: 11px;
`;
const Imgs = styled(FlexCol)`
  gap: 8px;
`;
const Card2 = styled(FlexCol)`
  padding: 0px 20px 149px 20px;
  border-radius: 12px;
  background: #fff;
`;
const Texts2 = styled(FlexCol)`
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e4e0da;
`;
const Text3 = styled.h4`
  width: 275px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
`;
const Content = () => {
  return (
    <Box>
      <Card1>
        <Texts1>
          <Text1>
            Xorazmda brokkoli karami eksporti yoʻlga qoʻyilmoqda xo‘jaligi
            sohasida yetishtirilayotg
          </Text1>
          <Time>09:40</Time>
        </Texts1>
        <Img />
        <Text2>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy.
          <br />
            Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text2>
        <Imgs>
          <Img />
          <Img />
        </Imgs>
      </Card1>
      <Card2>
        {agency1?.map((e) => (
          <Texts2 key={e.id}>
            <Text3>{e.title}</Text3>
            <Time>{e.time}</Time>
          </Texts2>
        ))}
      </Card2>
    </Box>
  );
};

export default Content;
