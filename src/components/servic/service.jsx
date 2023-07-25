import React from "react";
import { styled } from "styled-components";
import { servicee } from "../../constant/service";
import Card from "./Card";
const Content = styled.div`
  padding: 57px 0px 130px 0px;
`;
const Box = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
export const Title = styled.h5`
  color: #141f14;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;
const Service = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>INTEREKTIV XIZMATLAR</Title>
          <Cards>
            {servicee?.map((e) => {
              return (
                <Card key={e.id} text1={e.text1} text2={e.text2} img={e.img} />
              );
            })}
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Service;
