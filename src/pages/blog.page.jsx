import React from "react";
import BlogHeroComponent from "../components/blog/blog.hero.component";
import LogoComponent from "../components/logos.component";
import BlogDetailComponent from "../components/blog/blog.detail.component";
import styled from "styled-components";

export default function BlogPage() {
  const MainDiv = styled.div`
  max-width: 1920px
    width: 100%;
  `;
  return (
    <MainDiv>
      <BlogHeroComponent />
      <BlogDetailComponent />
      <LogoComponent />
    </MainDiv>
  );
}
