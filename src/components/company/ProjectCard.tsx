import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BasicTheme from "@/styles/breakpoints";
import { H5 } from "@/styles/BaseStyledTags";
import { Column } from "@/styles/BaseComponents";

const { colors } = BasicTheme;

interface ProjectCardProps {
  title: string;
  description: string[];
  icon?: string;
}

export default function ProjectCard({
  title,
  description,
  icon,
}: ProjectCardProps) {
  return (
    <Container>
      <Header>
        {icon && <Icon className={icon} />}
        <TitleSection>
          <H5 fontSize={{ zero: "16px", md: "18px" }}>{title}</H5>
        </TitleSection>
      </Header>
      <DescriptionList>
        {description.map((item, index) => (
          <DescriptionItem key={index}>{item}</DescriptionItem>
        ))}
      </DescriptionList>
    </Container>
  );
}

const Container = styled(Column)`
  background: ${colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${colors.borderLight};
  padding: 24px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px ${colors.shadow};
    border-color: ${colors.gray};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`;

const Icon = styled.i`
  font-size: 24px;
  color: ${colors.gray};
  flex-shrink: 0;
  margin-top: 2px;
`;

const TitleSection = styled.div`
  flex: 1;
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DescriptionItem = styled.li`
  color: ${colors.lightText};
  margin-bottom: 4px;
  line-height: 1.4;
  font-size: 12px;

  @media (min-width: 780px) {
    font-size: 14px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
