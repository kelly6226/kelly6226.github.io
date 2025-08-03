"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";

const { colors } = BasicTheme;
import { Div } from "@/styles/BaseStyledTags";

const AboutSection = () => {
  return (
    <About>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutGrid>
          <AboutText>
            <h3>프론트엔드 개발자로서의 여정</h3>
            <p>
              컴퓨터공학을 전공하고 2022년부터 프론트엔드 개발자로 일하고
              있습니다. 사용자 중심의 인터페이스를 만드는 것에 관심이 많으며,
              항상 더 나은 사용자 경험을 제공하기 위해 노력합니다.
            </p>
            <p>
              React와 TypeScript를 주로 사용하며, 최신 웹 기술 트렌드를 꾸준히
              학습하고 프로젝트에 적용하고 있습니다.
            </p>
            <AboutInfo>
              <span>
                <i className="fas fa-map-marker-alt"></i> 서울, 대한민국
              </span>
              <span>
                <i className="fas fa-calendar"></i> 2년 경력
              </span>
            </AboutInfo>
            <AboutInfo>
              <span>
                <i className="fas fa-graduation-cap"></i> 홍익대학교(서울)
                영여영문학과 / 컴퓨터공학과
              </span>
              <span>
                <i className="fas fa-calendar-check"></i> 2022.02 졸업
              </span>
              <span>
                <i className="fas fa-star"></i> 학점 3.8/4.5
              </span>
            </AboutInfo>
          </AboutText>
          <AboutCards>
            <Card>
              <i className="fas fa-code"></i>
              <h4>Clean Code</h4>
              <p>가독성 좋은 코드</p>
            </Card>
            <Card>
              <i className="fas fa-palette"></i>
              <h4>UI/UX</h4>
              <p>사용자 중심 디자인</p>
            </Card>
            <Card>
              <i className="fas fa-mobile-alt"></i>
              <h4>Responsive</h4>
              <p>반응형 웹</p>
            </Card>
            <Card>
              <i className="fas fa-globe"></i>
              <h4>Modern Web</h4>
              <p>최신 웹 기술</p>
            </Card>
          </AboutCards>
        </AboutGrid>
      </Container>
    </About>
  );
};

export default AboutSection;

const Section = styled.section`
  padding: 64px 0;

  @media (max-width: 768px) {
    padding: 48px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

const About = styled(Section)`
  background-color: ${colors.white};
  color: ${colors.darkText};
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 48px;
  color: ${colors.black};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 32px;
  }

  @media (max-width: 360px) {
    font-size: 24px;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const AboutText = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const AboutInfo = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
  color: ${colors.lightText};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    font-size: 13px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
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
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: ${colors.cardBg};
  padding: 32px;
  border-radius: 16px;
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
    font-size: 32px;
    color: ${colors.darkText};
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 8px;
    color: ${colors.darkText};
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};
    font-size: 14px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;
