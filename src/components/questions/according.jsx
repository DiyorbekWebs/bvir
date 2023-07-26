import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { styled } from "styled-components";
import { Arrow, Plus } from "../../assets/Img/img";
const ItemHeading = styled(AccordionItemHeading)`
  border: none;
`;
const Item = styled(AccordionItemButton)`
  padding: 13px 29px 13px 30px;
  display: flex;
  gap: 71px;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  border: none;
`;
const Text = styled.h4`
  color: #000;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 720px;
`;
const Panel = styled(AccordionItemPanel)`
width: 98%;
  border-radius: 0px 0px 12px 12px;
  background: #4eb027;
  padding: 39px 121px 83px 35px;
`;
const Text2 = styled.p`
  width: 693px;
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const AccordionN = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
`;
const AccordionI = styled(AccordionItem)`
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default function Example() {
  return (
    <AccordionN>
      <AccordionI>
        <ItemHeading>
          <Item>
            <Text>
              Tuman hokimining iqtisodiyot va tadbirkorlik masalalari bo`yicha
              bosh mutaхassisi
            </Text>
            <img src={Plus} alt="" />
          </Item>
        </ItemHeading>
        <Panel>
          <Text2>
            Oliy yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,Oliy
            yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,
          </Text2>
        </Panel>
      </AccordionI>
      {/*  */}
      <AccordionI>
        <ItemHeading>
          <Item>
            <Text>
              Nurafshon shahar hokimligi moliya-iqtisodiyot va kambag`allikni
              qisqartirish masalalari bo`yicha yetakchi mutaхassisi
            </Text>
            <img src={Plus} alt="" />
          </Item>
        </ItemHeading>
        <Panel>
          <Text2>
            Nurafshon shahar hokimligi moliya-iqtisodiyot va kambag`allikni
            qisqartirish masalalari bo`yicha yetakchi mutaхassisi
          </Text2>
        </Panel>
      </AccordionI>

      <AccordionI>
        <ItemHeading>
          <Item>
            <Text>"O`rta Хonobod " MFY Хokim yordamchisi</Text>
            <img src={Plus} alt="" />
          </Item>
        </ItemHeading>
        <Panel>
          <Text2>
            Oliy yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,Oliy
            yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,
          </Text2>
        </Panel>
      </AccordionI>
      <AccordionI>
        <ItemHeading>
          <Item>
            <Text>"Dilkor" mahalladagi хotin-qizlar faoli</Text>
            <img src={Plus} alt="" />
          </Item>
        </ItemHeading>
        <Panel>
          <Text2>
            Oliy yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,Oliy
            yoki xotin qizlarni qo‘llab-quvvatlash sohasida tajribaga ega
            o‘rta-maxsus maʼlumot; Oila va xotin-qizlar bilan ishlash
            tajribasiga ega, shaxsiy fazilatlari bilan namuna ko‘rsatgan,
          </Text2>
        </Panel>
      </AccordionI>
    </AccordionN>
  );
}
