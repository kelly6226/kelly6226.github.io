"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";

const { colors } = BasicTheme;
import { Div, Span } from "@/styles/BaseStyledTags";

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

const Education = styled(Section)`
  background-color: ${colors.veryLightGray};
  color: ${colors.darkText};
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  i {
    font-size: 32px;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  h3 {
    margin-bottom: 4px;
    font-size: 32px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    color: ${colors.lightText};
    font-size: 14px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const EducationDetails = styled.div`
  margin-bottom: 8px;

  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};
    font-size: 14px;
    margin-bottom: 8px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
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
  font-size: 0.875rem;
`;

const Score = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Level = styled.span`
  background-color: ${colors.veryLightGray};
  color: ${colors.gray};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;
