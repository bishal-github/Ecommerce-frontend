import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import BlogDetailCard from "./card/blog.detail.card";
import BlogSidebarComponent from "./blog.sidebar.component";
import {
  BlogData,
  offertData,
  recentPostData,
  saleProductData,
} from "../../assets/mokdata/mokdata";
import Pagination from "../../reusable/pagination/pagination";

let PageSize = 3;

export default function BlogDetailComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentData, setRecentData] = useState([]);
  const [saleData, setSaleData] = useState([]);
  const [offerData, setOfferData] = useState([]);

  useEffect(() => {
    setData(BlogData);
    setRecentData(recentPostData);
    setSaleData(saleProductData);
    setOfferData(offertData);
  }, []);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const newCurrentTableData = data.slice(firstPageIndex, lastPageIndex);
    setCurrentTableData(newCurrentTableData);
  }, [currentPage, data]);

  const [currentTableData, setCurrentTableData] = useState([]);

  const FirstDiv = styled.div`
    display: flex;
    max-width: 1177px;
    flex-direction: row;
    margin: 125px auto 0 auto;
    gap: 58px;

    @media (max-width: 640px) {
      flex-direction: column;
      padding: 0 6px;
    }
  `;

  const SecondDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 870px;
    gap: 30px;

    @media (max-width: 1280px) {
      padding-left: 6px;
    }

    @media (max-width: 640px) {
      padding-left: 0px;
    }
  `;

  return (
    <>
      <FirstDiv>
        <SecondDiv>
          {currentTableData.map((item, index) => (
            <BlogDetailCard key={index} data={item} />
          ))}

          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </SecondDiv>
        <BlogSidebarComponent
          data={recentData}
          datas={saleData}
          datass={offerData}
        />
      </FirstDiv>
    </>
  );
}
