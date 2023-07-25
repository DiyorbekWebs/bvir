import React from "react";
import { styled } from "styled-components";
import { headerTop, headerTopinfo } from "../../constant/Header";
import { Link } from "react-router-dom";
import {
  Dotes,
  Facebook,
  Instagram,
  Logo1,
  Telegram,
} from "../../assets/Img/img";
const Content = styled.header`
  background: #f5f3ef;
  display: flex;
  flex-direction: column;
`;
const HeaderTop = styled.div`
  background: #f2f0ed;
  padding: 12px 0px 12px 0px;
  border-bottom: 1px solid #e4e0da;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
`;
const Item = styled.li`
  color: #141f14;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6000000238418579;
`;

const HeaderBot = styled.div`
  border-bottom: 1px solid #e4e0da;
  padding: 12px 0px 12px 0px;
`;
const Item2 = styled(Item)`
  opacity: 1;
  /* opacity: 0.699999988079071; */
`;
const Logo = styled.img`
  width: 68.586px;
  height: 72.5px;
`;
const Left = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-end;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Text1 = styled.p`
  color: #141f14;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
const Text2 = styled.h1`
  width: 370px;
  color: #141f14;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  text-transform: uppercase;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Social = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const Btn = styled.div`
  color: #141f14;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  padding: 16px 22px;
  display: flex;
  gap: 9px;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
const Header = () => {
  return (
    <Content>
      <HeaderTop>
        <div className="container">
          <Box>
            <List>
              {headerTop?.map((e) => {
                return (
                  <Link key={e.id} to={e.path}>
                    <Item>{e.text}</Item>
                  </Link>
                );
              })}
            </List>
            <List>
              {headerTopinfo?.map((e) => {
                return (
                  <>
                    <Item2>{e.location}</Item2>
                    <Item2>{e.phone}</Item2>
                    <a href="#">
                      <Item2>{e.gmail}</Item2>
                    </a>
                  </>
                );
              })}
            </List>
          </Box>
        </div>
      </HeaderTop>
      <HeaderBot>
        <div className="container">
          <Box>
            <Left>
              <Logo src={Logo1} />
              <Texts>
                <Text1>Qishloq xo'jaligi vazirligi huzuridagi</Text1>
                <Text2>
                  Bog'dorchilik va Issiqxona xo'jaligini rivojlantirish
                  agentligi
                </Text2>
              </Texts>
            </Left>
            <Right>
              <Btns>
                <Btn>
                  <img src={Dotes} alt="" /> Barcha menu
                </Btn>
                <Btn>Interaktiv xizmatlar</Btn>
              </Btns>
              <Social>
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Telegram} alt="" />
              </Social>
            </Right>
          </Box>
        </div>
      </HeaderBot>
    </Content>
  );
};

export default Header;
