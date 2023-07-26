import React from "react";
import { styled } from "styled-components";
import { Title } from "../servic/service";
import "./index.css";
import { btns } from "../../constant/btns";
import { Link } from "react-router-dom";
import { Arrow, img4, img5, img6 } from "../../assets/Img/img";
const Content = styled.div`
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

`;
const Btns = styled.div`
  display: flex;
  gap: 20px;
  color: #141f14;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  align-items: center;
`;
const Btn = styled.div``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Outlet = styled.div`
padding-bottom: 250px;
`;
const Photo = styled.div`
  display: flex;
  gap: 56px;
`;
const Left = styled.div`
  position: relative;
  width: 100%;
  left: 0;
  top: 0;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`;
const Text = styled.h4`
  width: 489px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Img = styled.img`
  width: 481px;
  height: 285px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 4px solid #fff;
  background: linear-gradient(
      0deg,
      rgba(20, 31, 20, 0.3) 0%,
      rgba(20, 31, 20, 0.3) 100%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
  position: absolute;

`;
const Img1 = styled(Img)`
  z-index: -1;
`;
const Img2 = styled(Img)`
  z-index: 0;
  left: 130px;
`;
const Img3 = styled(Img)`
  z-index: 1;
  left: 250px;

`;
const Media = () => {
  const [sel, setSel] = React.useState(1);
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>MEDIATEKA</Title>
          <Bottom>
            <Btns>
              {btns?.map((e) => (
                <Link
                  style={{
                    color: "#000000",
                  }}
                  key={e.id}
                  to={e.path}
                >
                  <Btn
                    onClick={() => setSel(e.id)}
                    className={sel === e.id ? "active" : null}
                  >
                    {e.text}
                  </Btn>
                </Link>
              ))}
            </Btns>
            <Outlet>
              <Photo>
                <Left>
                  <Img1 src={img4} />
                  <Img2 src={img5} />
                  <Img3 src={img6} />
                </Left>
                <Right>
                  <Text>
                    Xorazmda brokkoli karami eksporti yoʻlga qoʻyilmoqda
                    xo‘jaligi sohasida yetishtirilayotg
                  </Text>
                  <Link>
                    <Text2>
                      Barchasini ko'rish
                      <img src={Arrow} alt="" />
                    </Text2>
                  </Link>
                </Right>
              </Photo>
            </Outlet>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Media;
