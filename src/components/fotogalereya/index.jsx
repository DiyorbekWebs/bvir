import React from "react";
import Card from "./Card";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../servic/service";
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Linkk = styled(Link)`
  color: #141f14;
  font-family: Open Sans;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Content = styled.div`
  padding: 25px 0px 100px 0px;
  background: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 1281px) {
    gap: 10px;
    row-gap: 20px;
    @media screen and (max-width: 835px) {
      gap: 23px;
    }
    @media screen and (max-width: 821px) {
      gap: 16px;
      row-gap: 30px;
    }
  }
`;
const Photo = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <Linkk to={"/"}>Bosh sahifa</Linkk>
            <Linkk to={"/info"}>// Foto galereya</Linkk>
          </Path>
          <Title
            style={{
              marginBottom: "10px",
            }}
          >
            Foto galeriya
          </Title>
          <Cards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Photo;
