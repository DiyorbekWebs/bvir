import React from "react";
import { styled } from "styled-components";
import { Tabs } from "../../Pages/Tab";
import "./index.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
const Content = styled.div`
  background-color: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  padding: 13px 0px 67px 0px;
`;
const Tablist = styled.div`
  padding-left: 10px;
  transition: 1s;

  cursor: pointer;
  width: 100%;
  height: 54px;
  gap: 30px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const Tab = styled.div`
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  opacity: 0.800000011920929;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
const Hero = () => {
  const [select, SetSelect] = React.useState(1);
  return (
    <Content>
      <div className="container">
        <Box>
          <Tablist>
            {Tabs?.map((e) => {
              return (
                <Tab
                  key={e.id}
                  onClick={() => SetSelect(e.id)}
                  className={e.id === select ? "active" : null}
                >
                  {e.text}
                </Tab>
              );
            })}
          </Tablist>
          <Cards>
            <Card1 />
            <Card2 />
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Hero;
