"use client";

import { CenterColumn, Grid, Row } from "@/styles/BaseComponents";
import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";
import { Div, Span, I } from "@/styles/BaseStyledTags";

const { colors } = BasicTheme;

const ExtraInfo = () => {
  return (
    <>
      <AboutInfo width="100%" gridGap={{ zero: "16px", md: "24px" }}>
        <Span>
          <I className="fas fa-map-marker-alt"></I> 서울, 대한민국
        </Span>
        <Span>
          <I className="fas fa-calendar"></I> 2년 경력
        </Span>
      </AboutInfo>
      <AboutInfo
        width="100%"
        gridGap={{ zero: "10px", md: "12px" }}
        flexDirection="column"
      >
        <Span>
          <I className="fas fa-graduation-cap"></I> 홍익대학교(서울)
          영여영문학과 / 컴퓨터공학과{" "}
        </Span>
        <Span display="flex">
          <I className="fas fa-calendar-check"></I> 2024.08 졸업
          <div style={{ margin: "0 8px" }}>|</div>
          <I className="fas fa-star"></I> 학점 3.8/4.5
        </Span>
      </AboutInfo>
    </>
  );
};

export default ExtraInfo;

const AboutInfo = styled(Div)`
  display: flex;
  margin-top: 24px;
  color: ${colors.lightText};

  span {
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    word-break: keep-all;
    line-height: 1.4;
    flex-direction: row;

    i {
      flex-shrink: 0;
    }
  }
`;
