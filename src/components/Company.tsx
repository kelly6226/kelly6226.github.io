"use client";

import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { Div, A } from "@/styles/BseStyledTags";

export default function CompanySection() {
  return (
    <Company>
      <Container>
        <SectionTitle>현재 회사</SectionTitle>
        <CompanyCard>
          <CompanyHeader>
            <CompanyInfo>
              <CompanyIcon>
                <i className="fas fa-building"></i>
              </CompanyIcon>
              <CompanyInfoText>
                <h3>테크 스타트업 A</h3>
                <p>프론트엔드 개발자 • 2023.03 - 현재</p>
              </CompanyInfoText>
            </CompanyInfo>
            <OutlineButton href="#">
              <i className="fas fa-external-link-alt"></i> 회사 사이트
            </OutlineButton>
          </CompanyHeader>
          <CompanyDescription>
            <p>
              핀테크 솔루션을 개발하는 스타트업으로, React 기반의 관리자
              대시보드와 고객 관리 시스템을 개발하고 있습니다. 빠른 성장과 함께
              다양한 기술적 도전을 경험하고 있습니다.
            </p>
          </CompanyDescription>

          <CompanyCardTitle>
            <h4>주요 프로젝트</h4>
          </CompanyCardTitle>
          <ProjectsGrid>
            <ProjectCard>
              {/* <ProjectImage
                src="https://via.placeholder.com/300x200"
                alt="E-commerce Dashboard"
                width={300}
                height={200}
              /> */}
              <ProjectContent>
                <h5>E-commerce Dashboard</h5>
                <p>
                  관리자용 대시보드로 상품 관리, 주문 처리, 통계 분석 기능을
                  제공합니다.
                </p>
                <TechStack>
                  <TechBadge>React</TechBadge>
                  <TechBadge>TypeScript</TechBadge>
                  <TechBadge>Chart.js</TechBadge>
                </TechStack>
                <SmallButton href="#">
                  <i className="fas fa-external-link-alt"></i> Demo
                </SmallButton>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              {/* <ProjectImage
                src="https://via.placeholder.com/300x200"
                alt="고객 관리 시스템"
                width={300}
                height={200}
              /> */}
              <ProjectContent>
                <h5>고객 관리 시스템</h5>
                <p>
                  B2B 고객 관리를 위한 CRM 시스템의 프론트엔드를 담당했습니다.
                </p>
                <TechStack>
                  <TechBadge>Next.js</TechBadge>
                  <TechBadge>React</TechBadge>
                  <TechBadge>Ant Design</TechBadge>
                </TechStack>
                <SmallButton href="#">
                  <i className="fas fa-external-link-alt"></i> Demo
                </SmallButton>
              </ProjectContent>
            </ProjectCard>
          </ProjectsGrid>
        </CompanyCard>
      </Container>
    </Company>
  );
}

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

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  color: ${colors.gray};
  border: 1px solid ${colors.borderMedium};

  &:hover {
    background-color: ${colors.lighterGray};
    border-color: ${colors.gray};
    color: ${colors.gray};
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const SmallButton = styled(Button)`
  padding: 8px 16px;

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const Section = styled.section`
  padding: 64px 0;

  @media (max-width: 768px) {
    padding: 48px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
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

const Company = styled(Section)`
  background-color: ${colors.veryLightGray};
  color: ${colors.darkText};
`;

const CompanyCard = styled.div`
  background: ${colors.white};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 1px solid ${colors.borderLight};

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CompanyIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${colors.darkText};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 32px;
    color: ${colors.white};
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;

    i {
      font-size: 24px;
    }
  }
`;

const CompanyInfoText = styled.div`
  h3 {
    margin-bottom: 4px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const CompanyDescription = styled.div`
  color: ${colors.lightText};
  margin-bottom: 32px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CompanyCardTitle = styled.h4`
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${colors.borderLight};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px ${colors.shadow};
    border-color: ${colors.gray};
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 24px;

  h5 {
    margin-bottom: 8px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};
    margin-bottom: 16px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const TechBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 4px 12px;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 2px 8px;
  }

  @media (max-width: 360px) {
    padding: 2px 6px;
  }
`;
