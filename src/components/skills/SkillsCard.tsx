"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";
import { Div, H3, Span } from "@/styles/BaseStyledTags";
import { mainStack, learning, languages } from "@/components/skills/SkillItem";

const { colors } = BasicTheme;

const SkillsCard = () => {
  return (
    <Container p={{ zero: "16px", md: "32px" }}>
      <Div mb="32px">
        <H3
          mb="16px"
          color="colors.darkText"
          fontSize={{ zero: "18px", md: "20px" }}
          fontWeight="600"
        >
          Main Stack
        </H3>
        <SkillList gridGap={{ zero: "4px", md: "8px" }}>
          {mainStack.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
        </SkillList>
      </Div>
      <Div mb="32px">
        <H3
          mb="16px"
          color="colors.darkText"
          fontSize={{ zero: "18px", md: "20px" }}
          fontWeight="600"
        >
          Learning
        </H3>
        <SkillList gridGap={{ zero: "4px", md: "8px" }}>
          {learning.map((skill, index) => (
            <ExtraSkillBadge key={index}>{skill}</ExtraSkillBadge>
          ))}
        </SkillList>
      </Div>

      <Div>
        <H3
          mb="16px"
          color="colors.darkText"
          fontSize={{ zero: "18px", md: "20px" }}
          fontWeight="600"
        >
          Languages
        </H3>
        <SkillList gridGap={{ zero: "4px", md: "8px" }}>
          {languages.map((language, index) => (
            <ExtraSkillBadge key={`lang-${index}`}>{language}</ExtraSkillBadge>
          ))}
        </SkillList>
      </Div>
    </Container>
  );
};

export default SkillsCard;

const Container = styled(Div)`
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 1px solid ${colors.borderLight};
  max-width: 800px;
  margin: 0 auto;
`;

const SkillList = styled(Div)`
  display: flex;
  flex-wrap: wrap;
`;

const SkillBadge = styled(Span)`
  background-color: ${colors.darkText};
  color: ${colors.white};
  border-radius: 9999px;
  font-weight: 500;
  padding: 6px 12px;
  font-size: 11px;
`;

const ExtraSkillBadge = styled(SkillBadge)`
  background-color: ${colors.borderLight};
  color: ${colors.gray};
`;
