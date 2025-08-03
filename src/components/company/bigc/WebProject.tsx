"use client";

import styled from "styled-components";
import Image from "next/image";
import BasicTheme from "@/styles/breakpoints";
import { Div, A, H2, H3, P, Button, H4, H5 } from "@/styles/BaseStyledTags";
import { CenterColumn, Column, Grid, Row } from "@/styles/BaseComponents";
import ProjectCard from "../ProjectCard";

const { colors } = BasicTheme;

export default function WebProject() {
  return (
    <ProjectSection>
      <H5 mb="12px" fontSize={{ zero: "14px", md: "16px" }} color={colors.gray}>
        웹 프로젝트
      </H5>
      <Grid
        gridTemplateColumns={{ zero: "1fr", md: "repeat(2, 1fr)" }}
        gridGap="16px"
      >
        <ProjectCard
          title="Home"
          description={[
            "- Framer 정적 페이지를 데이터 기반 동적 웹사이트로 전환",
            "- 카테고리별 메인 페이지 구현",
            "- 고정 레이아웃 사이트를 반응형 웹으로 변경",
          ]}
          icon="fas fa-home"
        />
        <ProjectCard
          title="MyPage"
          description={[
            "- 레이아웃 설계",
            "- 대시보드 페이지 구현",
            "- 내 콘텐츠 페이지 구현",
            "- 팔로우 페이지 구현",
            "- 관심내역 페이지 구현",
            "- 장바구니 페이지 구현",
            "- 결제내역 취소/교환/반품 기능 구현",
            "- 중국 배송지 추가 기능 구현",
            "- 투표 젬 사용내역 페이지 구현",
            "- FAQ 페이지 구현",
            "- 설정 페이지 구현",
          ]}
          icon="fas fa-user"
        />
        <ProjectCard
          title="Store"
          description={[
            "- 레이아웃 설계",
            "- 스토어 메인 페이지 구현",
            "- 스토어 카테고리 페이지 구현",
            "- 검색 페이지 구현",
          ]}
          icon="fas fa-shopping-cart"
        />
        <ProjectCard
          title="Promotion"
          description={[
            "- 친구 초대 이벤트 수신자 / 송신자 페이지 구현",
            "- 빅크 렌즈 페이지 구현",
            "- 4주년 기념 페이지 구현",
          ]}
          icon="fas fa-gift"
        />
        <ProjectCard
          title="Web Etc"
          description={[
            "- 본인 인증 기능 구현",
            "- 애드팝콘 광고 배너 추가",
            "- 추천인 기능 추가",
            "- 통합 결제 > 국가 코드 정보 개선",
            "- 통합 결제 > 지류티켓 배송 기능 추가",
            "- 통합 결제 > 추가 정보 / 제 3자 동의 기능 추가",
            "- i18n을 활용한 다국어 적용",
          ]}
          icon="fas fa-cogs"
        />
        <ProjectCard
          title="성능 개선"
          description={[
            "- 웹 접근성 및 SEO 개선",
            "- 레거시 코드 제거",
            "- Sentry를 통한 프론트 에러 로깅 기능 추가",
          ]}
          icon="fas fa-rocket"
        />
      </Grid>
    </ProjectSection>
  );
}

const ProjectSection = styled(Div)`
  margin-bottom: 32px;
  width: 100%;
`;
