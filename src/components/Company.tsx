"use client";

import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import Font from "./Font";

export default function CompanySection() {
  return (
    <Company>
      <Container>
        <SectionTitle>
          <Font typo="section_title">현재 회사</Font>
        </SectionTitle>
        <CompanyCard>
          <CompanyHeader>
            <CompanyInfo>
              <CompanyIcon>
                <i className="fas fa-building"></i>
              </CompanyIcon>
              <CompanyInfoText>
                <Font typo="card_title" as="h3">
                  테크 스타트업 A
                </Font>
                <Font typo="caption" as="p">
                  프론트엔드 개발자 • 2023.03 - 현재
                </Font>
              </CompanyInfoText>
            </CompanyInfo>
            <OutlineButton href="#">
              <i className="fas fa-external-link-alt"></i> 회사 사이트
            </OutlineButton>
          </CompanyHeader>
          <CompanyDescription>
            <Font typo="body_regular">
              핀테크 솔루션을 개발하는 스타트업으로, React 기반의 관리자
              대시보드와 고객 관리 시스템을 개발하고 있습니다. 빠른 성장과 함께
              다양한 기술적 도전을 경험하고 있습니다.
            </Font>
          </CompanyDescription>

          <CompanyCardTitle>
            <Font typo="card_title">주요 프로젝트</Font>
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
                <Font typo="card_title" as="h5">
                  E-commerce Dashboard
                </Font>
                <Font typo="body_regular" as="p">
                  관리자용 대시보드로 상품 관리, 주문 처리, 통계 분석 기능을
                  제공합니다.
                </Font>
                <TechStack>
                  <TechBadge>
                    <Font typo="badge">React</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">TypeScript</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">Chart.js</Font>
                  </TechBadge>
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
                <Font typo="card_title" as="h5">
                  고객 관리 시스템
                </Font>
                <Font typo="body_regular" as="p">
                  B2B 고객 관리를 위한 CRM 시스템의 프론트엔드를 담당했습니다.
                </Font>
                <TechStack>
                  <TechBadge>
                    <Font typo="badge">Next.js</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">React</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">Ant Design</Font>
                  </TechBadge>
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
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const SmallButton = styled(Button)`
  padding: 0.5rem 1rem;

  @media (max-width: 480px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
`;

const Section = styled.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
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

const Company = styled(Section)`
  background-color: ${colors.veryLightGray};
  color: ${colors.darkText};
`;

const CompanyCard = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 1px solid ${colors.borderLight};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CompanyIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${colors.darkText};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 2rem;
    color: ${colors.white};
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;

    i {
      font-size: 1.5rem;
    }
  }
`;

const CompanyInfoText = styled.div`
  h3 {
    margin-bottom: 0.25rem;

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
`;

const CompanyDescription = styled.div`
  color: ${colors.lightText};
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const CompanyCardTitle = styled.h4`
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${colors.white};
  border-radius: 1rem;
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
  padding: 1.5rem;

  h5 {
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    color: ${colors.lightText};
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const TechBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 0.125rem 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.125rem 0.375rem;
  }
`;
