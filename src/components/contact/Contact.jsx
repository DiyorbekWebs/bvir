import React from "react";
import { styled } from "styled-components";
import { Linkk, Path } from "../videogalerya";
import { Title } from "../servic/service";
import {
  Dotes,
  Facebook,
  Instagram,
  Logo1,
  Telegram,
} from "../../assets/Img/img";
const Content = styled.div`
  padding: 23px 0px 524px 0px;
  background: #f5f3ef;
  cursor: default;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Map = styled.div`
  width: 1322px;
  height: 414px;
`;
const ContactPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 12px;
  background: #fff;
  padding: 51px 65px 48px 90px;
`;
const Text1 = styled.p`
  color: #000;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text2 = styled.h1`
  color: #000;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Texts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 230px;
`;
const Texts2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Texts3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Social = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const Contact = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <Linkk>Bosh sahifa </Linkk>
            <Linkk>// Vakansiya</Linkk>
          </Path>
          <Title
            style={{
              marginBottom: "15px",
            }}
          >
            Bog’lanish
          </Title>
          <Bottom>
            <ContactPart>
              <Texts>
                <Texts2>
                  <Text1>Telefon nomer:</Text1>
                  <Texts3>
                    <Text2>+998 90 000-00-00</Text2>
                    <Text2>+998 93 550-00-00</Text2>
                  </Texts3>
                </Texts2>
                <Texts3>
                  <Text1>Адрес:</Text1>
                  <Text2>Узбекистан, г.Ташкент, ул.Паркент, 131А</Text2>
                </Texts3>
              </Texts>
              <Texts>
                <Texts2>
                  <Text1>E-mail</Text1>
                  <Text2>bvir12@gmail.com</Text2>
                </Texts2>

                <Texts2>
                  <Text1>Bizni kuzatib boring</Text1>
                  <Social>
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Telegram} alt="" />
                  </Social>
                </Texts2>
              </Texts>
            </ContactPart>
            <Map>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100% !important",
                  height: "414px",
                }}
              >
                <a
                  href="https://yandex.uz/maps/org/54375865612/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: 12,
                    position: "absolute",
                    top: 0,
                  }}
                >
                  110-son Maktab
                </a>
                <a
                  href="https://yandex.uz/maps/10335/tashkent/category/school/184106240/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: 12,
                    position: "absolute",
                    top: 14,
                  }}
                >
                  Umumta’lim maktabi Toshkentda
                </a>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?l=trf%2Ctrfe&ll=69.274917%2C41.304093&mode=search&oid=54375865612&ol=biz&rl=69.274638%2C41.304372~0.000025%2C0.000227&z=18.76"
                  width={1322}
                  height={414}
                  frameBorder={1}
                  allowFullScreen="true"
                  style={{
                    position: "relative",
                    width: "100% !important",
                    height: "414px",
                    border: "none ",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </Map>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Contact;
