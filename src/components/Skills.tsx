"use client";

import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Font } from "@/styles/Typography";

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
      <div className="container">
        <SectionTitle>
          <Font typo="section_title">Skills & Languages</Font>
        </SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillBadge key={index}>
              <Font typo="badge">{skill}</Font>
            </SkillBadge>
          ))}
          {languages.map((language, index) => (
            <LanguageBadge key={`lang-${index}`}>
              <Font typo="badge">{language}</Font>
            </LanguageBadge>
          ))}
        </SkillsGrid>
      </div>
    </Skills>
  );
};

export default SkillsSection;

const Skills = styled.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.375rem;
  }
`;

const SkillBadge = styled.span`
  background-color: ${colors.veryLightGray};
  color: ${colors.gray};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.darkText};
    color: ${colors.white};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.125rem 0.375rem;
  }
`;

const LanguageBadge = styled.span`
  background-color: ${colors.borderLight};
  color: ${colors.gray};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.darkText};
    color: ${colors.white};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.125rem 0.375rem;
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
