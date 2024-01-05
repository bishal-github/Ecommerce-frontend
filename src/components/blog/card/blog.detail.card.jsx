import React from "react";
import styled from "styled-components";
import firstImg from "../../../assets/images/blog-1.png";
import { BsVectorPen } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";

export default function BlogDetailCard(props) {
  console.log("props...", props);
  const FirstDiv1 = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Img = styled.img`
    max-width: 100%;
    height: auto;
  `;

  const NameDiv = styled.div`
    display: flex;
    flex-directon: row;
    gap: 27px;
    margin-top: 27px;
    margin-bottom: 28px;

    @media (max-width: 405px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const InsideNameDivFirst = styled.div`
    display: flex;
    flex-directon: row;
    align-items: center;
    gap: 10px;
  `;

  const InsideNameDivSecond = styled.div`
    display: flex;
    flex-directon: row;
    align-items: center;
    gap: 6px;
  `;

  const NameParagraphF = styled.p`
    color: #151875;
    font-family: Josefin Sans;
    font-size: 14px;
    font-weight: 400;
    background-color: #ffe7f9;
    padding: 5px 34px 4px 34px;
  `;

  const NameParagraphS = styled.p`
    color: #151875;
    font-family: Lato;
    font-size: 14px;
    font-weight: 600;
    background-color: #ffece2;
    padding: 2px 23px 4px 23px;
  `;

  const PgDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
  `;
  const InsidePgDiv = styled.h1`
    color: #151875;
    font-family: Josefin Sans;
    font-size: 30px;
    font-weight: 500;
  `;
  const InsidePgDivP = styled.p`
    color: #8a8fb9;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
  `;
  const ReadMoreDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    margin-top: 8px;
  `;
  const ReadMoreButton = styled.button`
    color: #151875;
    font-family: Lato;
    font-size: 18px;
    font-weight: 600;
  `;
  const ReadMoreButtonSideCircle = styled.p`
    width: 5px;
    height: 5px;
    background-color: #fb2e86;
    border-radius: 100%;
  `;
  return (
    <FirstDiv1>
      <div>
        <Img src={props?.data?.image} alt="" />
      </div>
      <NameDiv>
        <InsideNameDivFirst>
          <BsVectorPen size={16} color="#FB2E86" />
          <NameParagraphF>{props?.data?.name}</NameParagraphF>
        </InsideNameDivFirst>
        <InsideNameDivSecond>
          <LuCalendarDays size={16} color="#FFA454" />
          <NameParagraphS>{props?.data?.date}</NameParagraphS>
        </InsideNameDivSecond>
      </NameDiv>
      <PgDiv>
        <InsidePgDiv>{props?.data?.title}</InsidePgDiv>
        <InsidePgDivP>{props?.data?.desc}</InsidePgDivP>
        <ReadMoreDiv>
          <ReadMoreButton>Read More</ReadMoreButton>
          <ReadMoreButtonSideCircle></ReadMoreButtonSideCircle>
        </ReadMoreDiv>
      </PgDiv>
    </FirstDiv1>
  );
}
