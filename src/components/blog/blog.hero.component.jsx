import React from "react";
import styled from "styled-components";

export default function BlogHeroComponent() {
  const HeroDiv = styled.div`
    background-color: #f6f5ff;
    width: 100%;
    height: 286px;
    display: flex;
  `;

  const InsideHerov = styled.div`
    max-width: 1177px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1280px) {
      padding-left: 8px;
    }

    @media (max-width: 768px) {
      padding-left: 0;
      align-items: center;
    }
  `;

  const Heading = styled.h1`
    color: #101750;
    font-family: Josefin Sans, sans-serif;
    font-size: 36px;
    font-weight: 500;
  `;

  const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 13px;
    font-family: Lato;
    color: #000;
    font-size: 16px;
    font-weight: 500;
  `;

  const ListLast = styled.li`
    color: #fb2e86;
  `;
  return (
    <>
      <HeroDiv>
        <InsideHerov>
          <Heading>Blog Page</Heading>
          <List>
            <li>Home</li>
            <li>. Pages</li>
            <ListLast>. Blog Page</ListLast>
          </List>
        </InsideHerov>
      </HeroDiv>
    </>
  );
}
