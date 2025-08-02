"use client";

import styled from "styled-components";

const Skills = styled.section`
  padding: 4rem 0;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillBadge = styled.span`
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1f2937;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
`;

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
        <SectionTitle>Skills & Languages</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
          {languages.map((language, index) => (
            <SkillBadge
              key={`lang-${index}`}
              style={{ backgroundColor: "#e5e7eb", color: "#374151" }}
            >
              {language}
            </SkillBadge>
          ))}
        </SkillsGrid>
      </div>
    </Skills>
  );
};

export default SkillsSection;
