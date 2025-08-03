"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";
import { Div, H2 } from "@/styles/BaseStyledTags";
import SkillsCard from "@/components/skills/SkillsCard";

const { colors } = BasicTheme;

const SkillsSection = () => {
  return (
    <Container id="skills" p={{ zero: "32px 10px", md: "64px 20px" }}>
      <H2
        textAlign="center"
        color="colors.black"
        fontSize={{ zero: "24px", md: "32px" }}
        mb={{ zero: "32px", md: "48px" }}
      >
        Skills & Languages
      </H2>
      <SkillsCard />
    </Container>
  );
};

export default SkillsSection;

const Container = styled(Div)`
  max-width: 1200px;
  min-width: 360px;
  margin: 0 auto;

  background-color: ${colors.white};
  color: ${colors.darkText};
`;
