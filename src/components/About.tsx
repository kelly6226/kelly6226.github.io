"use client";

import styled from "styled-components";
import BasicTheme from "@/styles/breakpoints";

const { colors } = BasicTheme;
import { Div, H2, H3, P } from "@/styles/BaseStyledTags";
import { CenterColumn, Column, Grid, Row } from "@/styles/BaseComponents";
import ExtraInfo from "./about/ExtraInfo";

const AboutSection = () => {
  return (
    <CenterColumn
      p={{ zero: "64px 20px", md: "32px 30px" }}
      maxWidth="1200px"
      margin="0 auto"
      backgroundColor={colors.white}
    >
      <H2
        textAlign="center"
        mb={{ zero: "32px", md: "48px" }}
        fontSize={{ zero: "24px", md: "32px" }}
        color={colors.black}
      >
        About Me
      </H2>
      <Grid
        gridTemplateColumns={{ zero: "1fr", md: "1fr 1fr" }}
        gridGap={{ zero: "24px", md: "32px" }}
      >
        <CenterColumn mb="16px">
          <H3 fontSize={{ zero: "20px", md: "24px" }} mb="16px">
            사용자 경험을 우선하는 개발자
          </H3>
          <Column gridGap={{ zero: "5px", md: "10px" }}>
            <P fontSize={{ zero: "14px", md: "16px" }}>
              "사용자가 정말 편하게 쓸 수 있을까?"를 항상 고민합니다. 빠른 로딩
              속도와 부드러운 인터랙션을 위한 성능 최적화에 집중하고, 코드의
              품질 개선과 재사용성을 통해 효율성을 높입니다.
            </P>
            <P fontSize={{ zero: "14px", md: "16px" }}>
              복잡한 요구사항을 빠르게 파악하고 정확히 구현하는 강점을 가지고
              있습니다. 꼼꼼한 성격으로 코드 리뷰부터 테스트까지 놓치는 부분
              없이 진행하며, 체계적인 문서화를 통해 팀원들과의 원활한 협업을
              이끌어냅니다.
            </P>
          </Column>
          <ExtraInfo />
        </CenterColumn>
        <AboutCards>
          <Card>
            <i className="fas fa-cubes"></i>
            <h4>재사용성</h4>
            <p>효율적인 컴포넌트 설계와 문서화</p>
          </Card>
          <Card>
            <i className="fas fa-users"></i>
            <h4>명확한 의사소통</h4>
            <p>사용자 중심 사고와 팀 협업</p>
          </Card>
          <Card>
            <i className="fas fa-mobile-alt"></i>
            <h4>반응형 웹</h4>
            <p>모든 디바이스 최적화</p>
          </Card>
          <Card>
            <i className="fas fa-rocket"></i>
            <h4>성장</h4>
            <p>빠른 학습 능력과 기술적 도전</p>
          </Card>
        </AboutCards>
      </Grid>
    </CenterColumn>
  );
};

export default AboutSection;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: ${colors.cardBg};
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${colors.borderLight};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -3px ${colors.shadow};
    border-color: ${colors.darkText};
  }

  i {
    font-size: 32px;
    color: ${colors.darkText};
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 8px;
    color: ${colors.darkText};
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};
    font-size: 14px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;
