"use client";

import styled from "styled-components";
import Image from "next/image";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  color: #374151;
  border: 1px solid #d1d5db;

  &:hover {
    background-color: #f9fafb;
    border-color: #374151;
    color: #374151;
  }
`;

const SmallButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
`;

const Company = styled(Section)`
  background-color: #f3f4f6;
  color: #1f2937;
`;

const CompanyCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
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
  background-color: #1f2937;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 2rem;
    color: #ffffff;
  }
`;

const CompanyInfoText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  p {
    color: #6b7280;
  }
`;

const CompanyDescription = styled.p`
  color: #6b7280;
  margin-bottom: 2rem;
`;

const CompanyCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
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
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #374151;
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
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

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
            핀테크 솔루션을 개발하는 스타트업으로, React 기반의 관리자
            대시보드와 고객 관리 시스템을 개발하고 있습니다. 빠른 성장과 함께
            다양한 기술적 도전을 경험하고 있습니다.
          </CompanyDescription>

          <CompanyCardTitle>주요 프로젝트</CompanyCardTitle>
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
