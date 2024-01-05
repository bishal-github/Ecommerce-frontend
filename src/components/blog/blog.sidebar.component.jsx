import React from "react";
import styled from "styled-components";
import BlogDetailCard from "./card/blog.detail.card";
import { FaSearch } from "react-icons/fa";
import RecentPostCard from "./card/recent.post.card";
import SaleProductCard from "./card/sale.product.card";
import OfferCard from "./card/offer.card";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function BlogSidebarComponent(props) {
  console.log("bbb", props.datas);
  const ThirdDiv = styled.div`
    max-width: 250px;
    flex: 0.5;

    @media (max-width: 1280px) {
      padding-right: 6px;
    }

    @media (max-width: 640px) {
      padding-right: 0px;
      margin: 0 auto;
    }
  `;

  const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 52px;
  `;

  const InsideSearchDivT = styled.h1`
    color: #151875;
    font-family: Josefin Sans;
    font-size: 22px;
    font-style: italic;
    font-weight: 600;
  `;
  const InsideSearchDivI = styled.input`
    width: 270px;
    color: #1518751a;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    padding: 12px 0 11px 10px;
  `;
  const InsideSearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 2px;
    border: 1px solid #bdbdd8;
    background: #fff;
    padding-right: 13px;
  `;

  const CategoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
  `;
  const InsideCategoriesDiv = styled.div`
    color: var(--sale-tage-coloe, #3f509e);
    font-family: Josefin Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  `;
  const InsideCategoriesDivT = styled.h4`
    color: var(--Text, #151875);
    font-family: Josefin Sans;
    font-size: 22px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
  `;

  const InsideCategoriesDivP = styled.p`
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-radius: 3px;
      background: #f939bf;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const RecentPostDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 37px;
  `;

  const RecentPostDivDetail = styled.div`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  `;

  const SaleProductDiv = styled(RecentPostDiv)``;
  const SaleProductDivDetail = styled(RecentPostDivDetail)``;
  const InsideProductDivT = styled(InsideCategoriesDivT)``;
  const OfferProductDiv = styled(SaleProductDiv)``;
  const InsideOfferDivT = styled(InsideProductDivT)`
    margin-bottom: 37px;
  `;

  const InsideOfferDiv = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: between;
    flex-wrap: wrap;
    gap: 15px;
  `;

  const FollowDiv = styled(RecentPostDiv)``;
  const InsideFollowDivT = styled(InsideOfferDivT)`
    margin-bottom: 23px;
  `;

  const InsideFollowDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 126px;
    height: auto;
    padding: 8px 11px;
    gap: 14px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 8px 40px 0px rgba(49, 32, 138, 0.05);
  `;

  const LogoCircleF = styled.p`
    display: flex;
    width: 25px;
    border-radius: 100%;
    height: 25px;
    background: #5625df;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  const LogoCircleI = styled(LogoCircleF)`
    background: #ff27b7;
  `;

  const LogoCircleT = styled(LogoCircleF)`
    background: #37daf3;
  `;

  const TagDiv = styled(FollowDiv)`
    margin-top: 38px;
  `;

  const InsideTagDivT = styled(InsideFollowDivT)`
    margin-bottom: 18px;
  `;

  const InsideTagDivP = styled.p`
    color: var(--Text, #151875);
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    text-decoration-line: underline;
    cursor: pointer;

    &:hover {
      color: #fb2e86;
    }
  `;

  const InTagDivP = styled.p`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  `;
  return (
    <ThirdDiv>
      <SearchDiv>
        <InsideSearchDivT>Search</InsideSearchDivT>
        <InsideSearchDiv>
          <InsideSearchDivI placeholder="Search For Posts" type="text" />
          <FaSearch color="#CBCBE0" size={16} />
        </InsideSearchDiv>
      </SearchDiv>
      <CategoriesDiv>
        <InsideCategoriesDivT>Categories</InsideCategoriesDivT>
        <InsideCategoriesDiv>
          <InsideCategoriesDivP>Hobbies (14)</InsideCategoriesDivP>
          <InsideCategoriesDivP>Women (21)</InsideCategoriesDivP>
          <InsideCategoriesDivP>Women (21)</InsideCategoriesDivP>
          <InsideCategoriesDivP>Women (21)</InsideCategoriesDivP>
          <InsideCategoriesDivP>Women (21)</InsideCategoriesDivP>
          <InsideCategoriesDivP>Women (21)</InsideCategoriesDivP>
        </InsideCategoriesDiv>
      </CategoriesDiv>
      <RecentPostDiv>
        <InsideCategoriesDivT>Recent Post</InsideCategoriesDivT>
        <RecentPostDivDetail>
          {props?.data &&
            props?.data.map((item, index) => (
              <RecentPostCard key={index} data={item} />
            ))}
        </RecentPostDivDetail>
      </RecentPostDiv>

      <SaleProductDiv>
        <InsideProductDivT>Sale Product</InsideProductDivT>
        <SaleProductDivDetail>
          {props?.datas &&
            props?.datas?.map((item, index) => (
              <SaleProductCard key={index} data={item} />
            ))}
        </SaleProductDivDetail>
      </SaleProductDiv>

      <OfferProductDiv>
        <InsideOfferDivT>Offer Product</InsideOfferDivT>
        <InsideOfferDiv>
          {props?.datass &&
            props?.datass?.map((item, index) => (
              <OfferCard key={index} data={item} />
            ))}
        </InsideOfferDiv>
      </OfferProductDiv>

      <FollowDiv>
        <InsideFollowDivT>Follow</InsideFollowDivT>
        <InsideFollowDiv>
          <LogoCircleF>
            <FaFacebookF color="#FFFFFF" size={16} />
          </LogoCircleF>
          <LogoCircleI>
            <BiLogoInstagramAlt color="#FFFFFF" size={16} />
          </LogoCircleI>
          <LogoCircleT>
            <FaTwitter color="#FFFFFF" size={16} />
          </LogoCircleT>
        </InsideFollowDiv>
      </FollowDiv>

      <TagDiv>
        <InsideTagDivT>Tags</InsideTagDivT>
        <InTagDivP>
          <InsideTagDivP>General</InsideTagDivP>
          <InsideTagDivP>Atsanil</InsideTagDivP>
          <InsideTagDivP>Insas.</InsideTagDivP>
          <InsideTagDivP>Bibsaas</InsideTagDivP>
          <InsideTagDivP>Nulla.</InsideTagDivP>
        </InTagDivP>
      </TagDiv>
    </ThirdDiv>
  );
}
