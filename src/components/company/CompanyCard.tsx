"use client";

import styled from "styled-components";
import Image from "next/image";
import BasicTheme from "@/styles/breakpoints";
import { Div, A, H3, P, H4 } from "@/styles/BaseStyledTags";
import { CenterColumn, Column, Row } from "@/styles/BaseComponents";
import WebProject from "./bigc/WebProject";
import AppProject from "./bigc/AppProject";

const { colors } = BasicTheme;

export default function CompanyCard() {
  return (
    <Container p={{ zero: "16px", md: "32px" }} width="100%">
      <CompanyHeader
        flexDirection={{ zero: "column", md: "row" }}
        alignItems={{ zero: "flex-start", md: "center" }}
      >
        <Row gridGap="16px" alignItems="center">
          <Image
            src={`${
              process.env.NODE_ENV === "production" ? "/portfolio" : ""
            }/bigcLogo.png`}
            alt="bigc logo"
            width={100}
            height={100}
            style={{
              borderRadius: "12px",
              objectFit: "contain",
              width: "100px",
              height: "auto",
            }}
          />
          <Column>
            <H3 mb="4px">빅크</H3>
            <P color={colors.lightText} fontSize="13px">
              프론트엔드 인턴 • 2023.12 - 2024.03
            </P>
            <P color={colors.lightText} fontSize="13px">
              프론트엔드 개발자 • 2024.03 - 현재
            </P>
          </Column>
        </Row>
        <OutlineButton
          href="https://www.bigc.im/"
          target="_blank"
          p={{ zero: "6px 14px", md: "8px 16px" }}
          fontSize={{ zero: "12px", md: "15px" }}
        >
          <i className="fas fa-external-link-alt" /> 회사 사이트
        </OutlineButton>
      </CompanyHeader>
      <P
        width="100%"
        color={colors.lightText}
        mb="32px"
        fontSize={{ zero: "13px", md: "15px" }}
      >
        콘서트, 라이브 스트리밍, 영상(VOD), 티켓 예매, 커머스, 투표 등을
        제공하는{" "}
        <span style={{ fontWeight: 700 }}>글로벌 엔터테크 회사 빅크</span>에서
        프론트엔드 개발자로 근무하고 있습니다.
      </P>

      <H4 mb="16px" fontSize={{ zero: "16px", md: "18px" }}>
        주요 프로젝트
      </H4>

      <WebProject />
      <AppProject />
    </Container>
  );
}

const Container = styled(CenterColumn)`
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 1px solid ${colors.borderLight};
`;

const CompanyHeader = styled(Div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 100%;
  gap: 16px;
`;

const OutlineButton = styled(A)`
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  background-color: transparent;
  color: ${colors.gray};
  border: 1px solid ${colors.borderMedium};

  &:hover {
    border-color: ${colors.gray};
  }
`;
