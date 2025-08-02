"use client";

import styled from "styled-components";

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

const Education = styled(Section)`
  background-color: #ffffff;
  color: #1f2937;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-size: 2rem;
    color: #1f2937;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

const EducationDetails = styled.div`
  p {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`;

const LanguageSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Level = styled.span`
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export default function EducationSection() {
  return (
    <Education>
      <Container>
        <SectionTitle>Education & Language</SectionTitle>
        <EducationGrid>
          <EducationCard>
            <CardHeader>
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h3>한국대학교</h3>
                <p>컴퓨터공학과</p>
              </div>
            </CardHeader>
            <EducationDetails>
              <p>
                <strong>학위:</strong> 공학사
              </p>
              <p>
                <strong>졸업:</strong> 2022.02
              </p>
              <p>
                <strong>학점:</strong> 3.8/4.5
              </p>
              <p>
                <strong>주요 과목:</strong> 자료구조, 알고리즘, 웹프로그래밍,
                데이터베이스
              </p>
            </EducationDetails>
          </EducationCard>
          <EducationCard>
            <CardHeader>
              <i className="fas fa-language"></i>
              <div>
                <h3>어학 능력</h3>
                <p>Language Skills</p>
              </div>
            </CardHeader>
            <LanguageSkills>
              <LanguageItem>
                <span>TOEIC</span>
                <Score>850점</Score>
              </LanguageItem>
              <LanguageItem>
                <span>TOEIC Speaking</span>
                <Score>Level 6</Score>
              </LanguageItem>
              <LanguageItem>
                <span>영어 회화</span>
                <Level>Intermediate</Level>
              </LanguageItem>
              <LanguageItem>
                <span>기술 문서 독해</span>
                <Level>Advanced</Level>
              </LanguageItem>
            </LanguageSkills>
          </EducationCard>
        </EducationGrid>
      </Container>
    </Education>
  );
}
