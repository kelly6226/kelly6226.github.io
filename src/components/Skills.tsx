"use client";

import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Div, Span } from "@/styles/BseStyledTags";

const SkillsSection = () => {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "SCSS",
    "Git",
    "Figma",
    "Redux",
    "Zustand",
    "React Query",
    "Framer Motion",
    "Chart.js",
    "Ant Design",
  ];

  const languages = [
    "TOEIC 850점",
    "TOEIC Speaking Level 6",
    "영어 회화 Intermediate",
    "기술 문서 독해 Advanced",
  ];

  return (
    <Skills>
      <Container>
        <SectionTitle>Skills & Languages</SectionTitle>
        <SkillsCard>
          <SkillsContent>
            <h3>Technical Skills</h3>
            <SkillList>
              {skills.map((skill, index) => (
                <SkillBadge key={index}>{skill}</SkillBadge>
              ))}
            </SkillList>
          </SkillsContent>
          <LanguagesContent>
            <h3>Languages</h3>
            <SkillList>
              {languages.map((language, index) => (
                <LanguageBadge key={`lang-${index}`}>{language}</LanguageBadge>
              ))}
            </SkillList>
          </LanguagesContent>
        </SkillsCard>
      </Container>
    </Skills>
  );
};

export default SkillsSection;

const Section = styled.section`
  padding: 64px 0;

  @media (max-width: 768px) {
    padding: 48px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

const Skills = styled(Section)`
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

const SkillsCard = styled.div`
  background: ${colors.white};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 1px solid ${colors.borderLight};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const SkillsContent = styled.div`
  margin-bottom: 32px;

  h3 {
    margin-bottom: 16px;
    color: ${colors.darkText};
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const LanguagesContent = styled.div`
  h3 {
    margin-bottom: 16px;
    color: ${colors.darkText};
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const SkillBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 10px;
  }

  @media (max-width: 360px) {
    padding: 2px 4px;
    font-size: 9px;
  }
`;

const LanguageBadge = styled.span`
  background-color: ${colors.borderLight};
  color: ${colors.gray};
  padding: 6px 12px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    background-color: ${colors.darkText};
    color: ${colors.white};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 10px;
  }

  @media (max-width: 360px) {
    padding: 2px 4px;
    font-size: 9px;
  }
`;
