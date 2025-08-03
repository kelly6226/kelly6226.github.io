"use client";

import styled from "styled-components";
import { colors } from "@/styles/colors";
import Font from "./Font";

export default function EducationSection() {
  return (
    <Education>
      <Container>
        <SectionTitle>
          <Font typo="section_title">Education & Language</Font>
        </SectionTitle>
        <EducationGrid>
          <EducationCard>
            <CardHeader>
              <i className="fas fa-graduation-cap"></i>
              <div>
                <Font typo="card_title" as="h3">
                  한국대학교
                </Font>
                <Font typo="caption" as="p">
                  컴퓨터공학과
                </Font>
              </div>
            </CardHeader>
            <EducationDetails>
              <Font typo="body_regular" as="p">
                <strong>학위:</strong> 공학사
              </Font>
              <Font typo="body_regular" as="p">
                <strong>졸업:</strong> 2022.02
              </Font>
              <Font typo="body_regular" as="p">
                <strong>학점:</strong> 3.8/4.5
              </Font>
              <Font typo="body_regular" as="p">
                <strong>주요 과목:</strong> 자료구조, 알고리즘, 웹프로그래밍,
                데이터베이스
              </Font>
            </EducationDetails>
          </EducationCard>
          <EducationCard>
            <CardHeader>
              <i className="fas fa-language"></i>
              <div>
                <Font typo="card_title" as="h3">
                  어학 능력
                </Font>
                <Font typo="caption" as="p">
                  Language Skills
                </Font>
              </div>
            </CardHeader>
            <LanguageSkills>
              <LanguageItem>
                <Font typo="caption" as="span">
                  TOEIC
                </Font>
                <Score>
                  <Font typo="badge">850점</Font>
                </Score>
              </LanguageItem>
              <LanguageItem>
                <Font typo="caption" as="span">
                  TOEIC Speaking
                </Font>
                <Score>
                  <Font typo="badge">Level 6</Font>
                </Score>
              </LanguageItem>
              <LanguageItem>
                <Font typo="caption" as="span">
                  영어 회화
                </Font>
                <Level>
                  <Font typo="badge">Intermediate</Font>
                </Level>
              </LanguageItem>
              <LanguageItem>
                <Font typo="caption" as="span">
                  기술 문서 독해
                </Font>
                <Level>
                  <Font typo="badge">Advanced</Font>
                </Level>
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

const Education = styled(Section)`
  background-color: ${colors.white};
  color: ${colors.darkText};
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-size: 2rem;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

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

const EducationDetails = styled.div`
  p {
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

const LanguageSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Score = styled.span`
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

const Level = styled.span`
  background-color: ${colors.veryLightGray};
  color: ${colors.gray};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 0.125rem 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.125rem 0.375rem;
  }
`;
