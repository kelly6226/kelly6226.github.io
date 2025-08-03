"use client";

import styled from "styled-components";
import Image from "next/image";
import BasicTheme from "@/styles/breakpoints";
import { Div, A, H2, H3, P, Button, H4, H5 } from "@/styles/BaseStyledTags";
import { CenterColumn, Column, Grid, Row } from "@/styles/BaseComponents";
import ProjectCard from "../ProjectCard";

const { colors } = BasicTheme;

export default function AppProject() {
  return (
    <ProjectSection>
      <H5 mb="12px" fontSize={{ zero: "14px", md: "16px" }} color={colors.gray}>
        인앱웹 프로젝트
      </H5>
      <P
        fontSize={{ zero: "12px", md: "14px" }}
        color={colors.lightText}
        mb="16px"
        lineHeight="1.6"
      >
        모바일 최적화 웹뷰 노출로 네이티브 앱과 웹의 장점을 결합했습니다. 앱-웹
        양방향 통신을 통해 웹과 앱의 통일된 UI를 제공하였습니다.
      </P>
      <Grid
        gridTemplateColumns={{ zero: "1fr", md: "repeat(2, 1fr)" }}
        gridGap="16px"
      >
        <ProjectCard
          title="inAppWebView"
          description={[
            "- 앱/웹뷰 헤더 통합",
            "- 튜토리얼 페이지 제작",
            "- 홈 UI/UX 개편",
          ]}
          icon="fas fa-mobile-alt"
        />

        <ProjectCard
          title="성능 최적화"
          description={[
            "- API를 CDN으로 이전, JSON 캐싱 적용 (로딩속도 40% 개선)",
            "- 앱 버전 관리",
          ]}
          icon="fas fa-tachometer-alt"
        />
      </Grid>
    </ProjectSection>
  );
}

const ProjectSection = styled(Div)`
  margin-bottom: 32px;
  width: 100%;
`;
