"use client";

import styled from "styled-components";

const About = styled.section`
  padding: 4rem 0;
  background-color: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  p {
    margin-bottom: 1rem;
    color: #6b7280;
  }
`;

const AboutInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  color: #6b7280;
  font-size: 0.875rem;

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
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
    border-color: #1f2937;
  }

  i {
    font-size: 2rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
`;

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
