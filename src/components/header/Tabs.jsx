import React from "react";
import "../hero/index.css";
import { Tabs } from "../../constant/Tab/index.js";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
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
  align-items: center;
  @media screen and (max-width: 885px) {
    padding-left: 5px;
  }
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
  padding: 20px;
  border-radius: 7px;
  margin-left: -10px;
  @media screen and (max-width: 885px) {
    font-size: 8px;
    padding: 10px 5px 10px 5px;
    font-weight: 600;
  }
`;
const Content = styled.div`
  padding: 13px 0px 0px 0px;
  background-color: #f5f3ef;
`;
const Tabs11 = () => {
  const id = localStorage.getItem("tabId");
  const [select, SetSelect] = React.useState(1);

  return (
    <Content>
      <div className="container">
        <Tablist>
          {Tabs?.map((e) => {
            return (
              <Link to={e.path}>
                <Tab
                  key={e.id}
                  onClick={() => {
                    // localStorage.setItem("tabId", e.id);
                    SetSelect(e.id);
                  }}
                  className={e.id === select ? "active" : null}
                >
                  {e.text}
                </Tab>
              </Link>
            );
          })}
        </Tablist>
      </div>
    </Content>
  );
};

export default Tabs11;
