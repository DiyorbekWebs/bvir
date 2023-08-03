import React from "react";
import { styled } from "styled-components";
import { Icon14, Icon15, Icon16, Logo2 } from "../../assets/Img/img";
const Content = styled.footer``;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  gap: 118px;
   @media screen and (max-width: 1281px) {
    gap: 90px;
  }
`;
const Box2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterTop = styled.div`
  padding: 76px 0px 99px 0px;
  background: #f5f3ef;
`;
const FooterBottom = styled.div`
  padding: 38px 0px 36px 0px;
  background: #141f14;
`;
const Lists = styled.div`
  display: flex;
  align-items: center;
  gap: 66px;
 
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Item = styled.li`
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`;
const Item2 = styled.li`
  color: #141f14;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const List2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Item3 = styled.li`
  color: #fff;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text = styled.h4`
  color: #fff;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const Footer = () => {
  return (
    <Content>
      <FooterTop>
        <div className="container">
          <Box1>
            <img src={Logo2} alt="" />
            <Lists>
              <List>
                <Item>Agentlik</Item>
                <Item>Axborot xizmati</Item>
                <Item>Rahbariyat</Item>
              </List>
              <List>
                <Item>Online kredit</Item>
                <Item>Me’yoriy hujjatlar</Item>
                <Item>Ochiq ma’lumotlar</Item>
              </List>
              <List>
                <Item>Tarkibiy tuzilma</Item>
                <Item>Tarkibiy tuzilma</Item>
                <Item>Ochiq ma’lumotlar</Item>
              </List>
            </Lists>
            <List>
              <Item2>
                <img src={Icon14} alt="" />
                +998 71 206–70–30
              </Item2>
              <Item2>
                <img src={Icon15} alt="" />
                info@agro.uz
              </Item2>
              <Item2>
                <img src={Icon16} alt="" />
                info@agro.uz
              </Item2>
            </List>
          </Box1>
        </div>
      </FooterTop>
      <FooterBottom>
        <div className="container">
          <Box2>
            <List2>
              <Item3>Политика безопасности</Item3>
              <Item3>Условия соглашения</Item3>
              <Item3>Публичная оферта</Item3>
              <Item3>© 2023 ООО. All rights reserved</Item3>
            </List2>
            <span
              style={{
                display: "flex",
              }}
            >
              Designed by: <Text>Getter</Text>
            </span>
          </Box2>
        </div>
      </FooterBottom>
    </Content>
  );
};

export default Footer;
