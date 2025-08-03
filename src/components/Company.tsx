"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";
import { H2 } from "@/styles/BaseStyledTags";
import { CenterColumn } from "@/styles/BaseComponents";
import CompanyCard from "./company/CompanyCard";

const { colors } = BasicTheme;

export default function CompanySection() {
  return (
    <Container id="working" p={{ zero: "32px 10px", md: "64px 20px" }}>
      <H2
        textAlign="center"
        color="colors.black"
        fontSize={{ zero: "24px", md: "32px" }}
        mb="48px"
      >
        Working Experience
      </H2>
      <CompanyCard />
    </Container>
  );
}

const Container = styled(CenterColumn)`
  max-width: 1200px;
  min-width: 360px;
  margin: 0 auto;

  background-color: ${colors.veryLightGray};
  color: ${colors.darkText};
`;
