import React from "react";
import { styled } from "styled-components";
import { Linkk, Path } from "../videogalerya";
import { Link, Outlet } from "react-router-dom";
import { agencyList } from "../../constant/agency";
import "./index.css";
import { Arrow2 } from "../../assets/Img/img";
const Content = styled.div`
  padding: 23px 0px 147px 0px;
  background: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Bottom = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;
const List = styled.ul`
  width: 315px;
  height: 407px;
  border-radius: 12px;
  background: #fff;
  padding: 35px 0px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  width: 240px;
  padding: 16px 16px 16px 24px;
  color: #000;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.800000011920929;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const AgencyPage = () => {
  const [sel, setSel] = React.useState(1);
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <Linkk to={"/"}>Bosh sahifa </Linkk>
            <Linkk to={"/agency"}>// Agentlik haqida</Linkk>
          </Path>
          <Bottom>
            <List>
              {agencyList?.map((e) => (
                <Link key={e.id} to={e.path}>
                  <Item
                    className={sel == e.id ? "active" : null}
                    onClick={() => setSel(e.id)}
                  >
                    {e.text}
                    {sel == e.id ? <img src={Arrow2} alt="" /> : null}
                  </Item>
                </Link>
              ))}
            </List>
            <Outlet />
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default AgencyPage;
