"use client";

import styled from "styled-components";
import { colors } from "@/styles/colors";
import Font from "./Font";

const AboutSection = () => {
  return (
    <About>
      <Container>
        <SectionTitle>
          <Font typo="section_title">About Me</Font>
        </SectionTitle>
        <AboutGrid>
          <AboutText>
            <Font typo="card_title" as="h3">
              프론트엔드 개발자로서의 여정
            </Font>
            <Font typo="body_regular" as="p">
              컴퓨터공학을 전공하고 2022년부터 프론트엔드 개발자로 일하고
              있습니다. 사용자 중심의 인터페이스를 만드는 것에 관심이 많으며,
              항상 더 나은 사용자 경험을 제공하기 위해 노력합니다.
            </Font>
            <Font typo="body_regular" as="p">
              React와 TypeScript를 주로 사용하며, 최신 웹 기술 트렌드를 꾸준히
              학습하고 프로젝트에 적용하고 있습니다.
            </Font>
            <AboutInfo>
              <Font typo="caption" as="span">
                <i className="fas fa-map-marker-alt"></i> 서울, 대한민국
              </Font>
              <Font typo="caption" as="span">
                <i className="fas fa-calendar"></i> 2년 경력
              </Font>
            </AboutInfo>
            <AboutInfo>
              <Font typo="caption" as="span">
                <i className="fas fa-graduation-cap"></i> 홍익대학교(서울)
                영여영문학과 / 컴퓨터공학과
              </Font>
              <Font typo="caption" as="span">
                <i className="fas fa-calendar-check"></i> 2022.02 졸업
              </Font>
              <Font typo="caption" as="span">
                <i className="fas fa-star"></i> 학점 3.8/4.5
              </Font>
            </AboutInfo>
          </AboutText>
          <AboutCards>
            <Card>
              <i className="fas fa-code"></i>
              <Font typo="card_title" as="h4">
                Clean Code
              </Font>
              <Font typo="caption" as="p">
                가독성 좋은 코드
              </Font>
            </Card>
            <Card>
              <i className="fas fa-palette"></i>
              <Font typo="card_title" as="h4">
                UI/UX
              </Font>
              <Font typo="caption" as="p">
                사용자 중심 디자인
              </Font>
            </Card>
            <Card>
              <i className="fas fa-mobile-alt"></i>
              <Font typo="card_title" as="h4">
                Responsive
              </Font>
              <Font typo="caption" as="p">
                반응형 웹
              </Font>
            </Card>
            <Card>
              <i className="fas fa-globe"></i>
              <Font typo="card_title" as="h4">
                Modern Web
              </Font>
              <Font typo="caption" as="p">
                최신 웹 기술
              </Font>
            </Card>
          </AboutCards>
        </AboutGrid>
      </Container>
    </About>
  );
};

export default AboutSection;

const About = styled.section`
  padding: 4rem 0;
  background-color: ${colors.bgLight};

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  @media (max-width: 360px) {
    min-width: 360px;
    padding: 0 10px;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const AboutText = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1rem;
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

const AboutInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  color: ${colors.lightText};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    font-size: 0.8rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    word-break: keep-all;
    line-height: 1.4;

    i {
      flex-shrink: 0;
    }
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: ${colors.cardBg};
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${colors.borderLight};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -3px ${colors.shadow};
    border-color: ${colors.darkText};
  }

  i {
    font-size: 2rem;
    color: ${colors.darkText};
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.black};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;
