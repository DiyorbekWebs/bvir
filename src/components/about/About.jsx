import React from "react";
import { styled } from "styled-components";
import { Title } from "../servic/service";
import { Arrow, AvatarIcon } from "../../assets/Img/img";
import { Link } from "react-router-dom";

const Content = styled.div`
  padding: 170px 0px 149px 0px;
  background: #fff;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  align-items: flex-start;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  align-items: flex-start;
`;
const Text1 = styled.h3`
  width: 1076px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 58px; /* 145% */
  text-transform: uppercase;
`;
const Text2 = styled.span`
  color: #fff;
  font-family: Open Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 58px;
  text-transform: uppercase;
  border-radius: 40px;
  background: #4eb027;
  padding: 8px 20px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
`;
const Text3 = styled.h5`
  color: #141f14;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 131.25% */
  letter-spacing: -0.8px;
`;
const UserTab = styled.div`
  padding: 13px 29px 13px 10px;
  border-radius: 12px;
  background: #f5e3bd;
  display: flex;
  align-items: center;
  gap: 57px;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
`;
const Text4 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Aboutt = styled.div`
  padding: 26px 100px 26px 26px;
  border-radius: 12px;
  background: #4eb027;
  display: flex;
  align-items: center;
  gap: 63px;
`;
const Text5 = styled.h4`
  width: 705px;
  color: #fff;
  font-family: Open Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 144% */
`;
const VideoPlayer = styled.div`
  width: 426px;
  height: 426px;
  border-radius: 426px;
`;
const About = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Texts>
            <Title>AGENTLIK HAQIDA</Title>
            <Text1>
              Bog‘dorchilik va issiqxona xo‘jaliklarini <Text2>BARQAROR</Text2>{" "}
              rivojlanishini
            </Text1>
          </Texts>
          <Bottom>
            <Text3>Bizning faxriylarimiz</Text3>
            <UserTab>
              <Avatar>
                <img src={AvatarIcon} alt="" />
                <img src={AvatarIcon} alt="" />
                <img src={AvatarIcon} alt="" />
                <img src={AvatarIcon} alt="" />
                <img src={AvatarIcon} alt="" />
                <img src={AvatarIcon} alt="" />
              </Avatar>
              <Link>
                <Text4>
                  Barchasini ko’rish
                  <img src={Arrow} alt="" />
                </Text4>
              </Link>
            </UserTab>
            <Aboutt>
             
              <Text5>
                O‘zbekiston Respublikasi Prezidentining «O‘zbekiston
                Respublikasida bog‘dorchilik va issiqxona xo‘jaligini yanada
                rivojlantirish chora-tadbirlari to‘g‘risida» 20-mart 2019-
                yildagi PQ-4246-sonli qaroriga muvofiq, O‘zbekiston Respublikasi
                Qishloq xo‘jaligi vazirligi huzurida Bog‘dorchilik va issiqxona
                xo‘jaligini rivojlantirish agentligi tashkil etilgan.
              </Text5>
            </Aboutt>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default About;
