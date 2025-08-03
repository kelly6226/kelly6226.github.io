"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import Font from "./Font";

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = React.useState<"personal" | "team">(
    "personal"
  );

  return (
    <Activities>
      <Container>
        <SectionTitle>
          <Font typo="section_title">Activities & Team Projects</Font>
        </SectionTitle>

        {/* 동아리 활동 & 교육 */}
        <ActivityGrid>
          <ActivityCard>
            <CardHeader>
              <i className="fas fa-users"></i>
              <div>
                <Font typo="card_title" as="h3">
                  IT 동아리 'CodeCraft'
                </Font>
                <Font typo="caption" as="p">
                  2020.03 - 2022.02 • 부회장
                </Font>
              </div>
            </CardHeader>
            <Font typo="body_regular" as="p">
              대학교 IT 동아리에서 웹 개발 스터디를 주도하고, 신입 회원들을 위한
              프로그래밍 교육을 담당했습니다. 동아리 내 프로젝트 기획 및 개발을
              리드하며 팀워크와 리더십을 기를 수 있었습니다.
            </Font>
            <ActivityBadges>
              <ActivityBadge>
                <Font typo="badge">웹 개발 스터디 리더</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">신입생 멘토링</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">프로젝트 기획</Font>
              </ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-laptop-code"></i>
              <div>
                <Font typo="card_title" as="h3">
                  알고리즘 스터디
                </Font>
                <Font typo="caption" as="p">
                  2021.09 - 2022.06 • 팀장
                </Font>
              </div>
            </CardHeader>
            <Font typo="body_regular" as="p">
              코딩 테스트 대비를 위한 알고리즘 스터디를 운영했습니다. 주 2회
              문제 풀이 세션과 코드 리뷰를 진행하여 팀원들의 알고리즘 실력을
              향상시켰습니다.
            </Font>
            <ActivityBadges>
              <ActivityBadge>
                <Font typo="badge">알고리즘 문제 풀이</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">코드 리뷰</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">스터디 운영</Font>
              </ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-chalkboard-teacher"></i>
              <div>
                <Font typo="card_title" as="h3">
                  프론트엔드 개발 교육
                </Font>
                <Font typo="caption" as="p">
                  2022.03 - 2022.08 • 강사
                </Font>
              </div>
            </CardHeader>
            <Font typo="body_regular" as="p">
              대학교 내 프론트엔드 개발 동아리에서 React와 JavaScript 기초를
              가르치는 강사로 활동했습니다. 실습 중심의 교육으로 학생들의 실무
              역량을 키웠습니다.
            </Font>
            <ActivityBadges>
              <ActivityBadge>
                <Font typo="badge">React 강의</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">JavaScript 기초</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">실습 지도</Font>
              </ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-certificate"></i>
              <div>
                <Font typo="card_title" as="h3">
                  웹 개발 부트캠프
                </Font>
                <Font typo="caption" as="p">
                  2021.07 - 2021.08 • 수료
                </Font>
              </div>
            </CardHeader>
            <Font typo="body_regular" as="p">
              실무 중심의 웹 개발 부트캠프에서 풀스택 개발 과정을 수료했습니다.
              팀 프로젝트를 통해 협업 경험을 쌓고 실제 서비스를 개발하는 경험을
              했습니다.
            </Font>
            <ActivityBadges>
              <ActivityBadge>
                <Font typo="badge">풀스택 개발</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">팀 프로젝트</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">실무 경험</Font>
              </ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-graduation-cap"></i>
              <div>
                <Font typo="card_title" as="h3">
                  데이터 분석 특강
                </Font>
                <Font typo="caption" as="p">
                  2021.03 - 2021.06 • 참여
                </Font>
              </div>
            </CardHeader>
            <Font typo="body_regular" as="p">
              대학교에서 진행된 데이터 분석 특강에 참여하여 Python과 데이터
              시각화 기법을 학습했습니다. 실제 데이터를 활용한 프로젝트를
              완료했습니다.
            </Font>
            <ActivityBadges>
              <ActivityBadge>
                <Font typo="badge">Python</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">데이터 시각화</Font>
              </ActivityBadge>
              <ActivityBadge>
                <Font typo="badge">데이터 분석</Font>
              </ActivityBadge>
            </ActivityBadges>
          </ActivityCard>
        </ActivityGrid>

        {/* 탭 네비게이션 */}
        <TabContainer>
          <TabButton
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            <Font typo="button">개인 프로젝트</Font>
          </TabButton>
          <TabButton
            active={activeTab === "team"}
            onClick={() => setActiveTab("team")}
          >
            <Font typo="button">팀 프로젝트 & 해커톤</Font>
          </TabButton>
        </TabContainer>

        {/* 개인 프로젝트 탭 */}
        {activeTab === "personal" && (
          <TeamProjects>
            <TeamProjectCard>
              <ProjectImageContainer>
                {/* <Image
                  src="https://via.placeholder.com/400x300"
                  alt="Task Management App"
                  width={400}
                  height={300}
                /> */}
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectHeader>
                  <ProjectTitleArea>
                    <i className="fas fa-tasks"></i>
                    <div>
                      <Font typo="card_title" as="h4">
                        Task Management App
                      </Font>
                      <Font typo="caption" as="p">
                        2024.01 - 2024.03
                      </Font>
                    </div>
                  </ProjectTitleArea>
                </ProjectHeader>
                <ProjectDescription>
                  <Font typo="body_regular">
                    개인 생산성 향상을 위한 칸반 보드 스타일의 작업 관리
                    애플리케이션입니다. React와 TypeScript를 사용하여
                    개발했습니다.
                  </Font>
                </ProjectDescription>

                <TechStack>
                  <TechBadge>
                    <Font typo="badge">React</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">TypeScript</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">Supabase</Font>
                  </TechBadge>
                </TechStack>
                <OutlineButton href="#" className="btn-small">
                  <i className="fab fa-github"></i> 프로젝트 보기
                </OutlineButton>
              </ProjectInfo>
            </TeamProjectCard>

            <TeamProjectCard>
              <ProjectImageContainer>
                {/* <Image
                  src="https://via.placeholder.com/400x300"
                  alt="Weather App"
                  width={400}
                  height={300}
                /> */}
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectHeader>
                  <ProjectTitleArea>
                    <i className="fas fa-cloud-sun"></i>
                    <div>
                      <Font typo="card_title" as="h4">
                        Weather App
                      </Font>
                      <Font typo="caption" as="p">
                        2023.12 - 2024.01
                      </Font>
                    </div>
                  </ProjectTitleArea>
                </ProjectHeader>
                <ProjectDescription>
                  <Font typo="body_regular">
                    실시간 날씨 정보와 5일 예보를 제공하는 반응형 웹
                    애플리케이션입니다. OpenWeather API를 활용했습니다.
                  </Font>
                </ProjectDescription>

                <TechStack>
                  <TechBadge>
                    <Font typo="badge">React</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">OpenWeather API</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">PWA</Font>
                  </TechBadge>
                </TechStack>
                <OutlineButton href="#" className="btn-small">
                  <i className="fab fa-github"></i> 프로젝트 보기
                </OutlineButton>
              </ProjectInfo>
            </TeamProjectCard>
          </TeamProjects>
        )}

        {/* 팀 프로젝트 탭 */}
        {activeTab === "team" && (
          <TeamProjects>
            <TeamProjectCard>
              <ProjectImageContainer>
                {/* <Image
                  src="https://via.placeholder.com/400x300"
                  alt="2024 핀테크 해커톤"
                  width={400}
                  height={300}
                /> */}
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectHeader>
                  <ProjectTitleArea>
                    <i className="fas fa-trophy"></i>
                    <div>
                      <Font typo="card_title" as="h4">
                        2024 핀테크 해커톤
                      </Font>
                      <Font typo="caption" as="p">
                        2024.08
                      </Font>
                    </div>
                  </ProjectTitleArea>
                  <AwardBadge>
                    <i className="fas fa-award"></i> 우수상 (2위)
                  </AwardBadge>
                </ProjectHeader>
                <ProjectDescription>
                  <Font typo="body_regular">
                    가계부 관리 앱 개발로 우수상 수상. React Native와 Firebase를
                    활용한 모바일 앱 개발
                  </Font>
                </ProjectDescription>

                {/* 팀 구성 */}
                <TeamComposition>
                  <SectionHeader>
                    <i className="fas fa-users"></i>
                    <Font typo="caption" as="span">
                      팀 구성
                    </Font>
                  </SectionHeader>
                  <TeamRoles>
                    <RoleBadge>
                      <Font typo="badge">프론트엔드: 1명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">백엔드: 1명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">디자이너: 1명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">기획자: 1명</Font>
                    </RoleBadge>
                  </TeamRoles>
                </TeamComposition>

                {/* 기여도 */}
                <Contributions>
                  <SectionHeader>
                    <i className="fas fa-code"></i>
                    <Font typo="caption" as="span">
                      내 기여도
                    </Font>
                  </SectionHeader>
                  <ContributionBars>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        기획
                      </Font>
                      <ProgressBar>
                        <Progress width="30%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        30%
                      </Font>
                    </ContributionItem>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        디자인
                      </Font>
                      <ProgressBar>
                        <Progress width="20%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        20%
                      </Font>
                    </ContributionItem>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        프론트엔드 개발
                      </Font>
                      <ProgressBar>
                        <Progress width="80%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        80%
                      </Font>
                    </ContributionItem>
                  </ContributionBars>
                </Contributions>

                <TechStack>
                  <TechBadge>
                    <Font typo="badge">React Native</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">Firebase</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">TypeScript</Font>
                  </TechBadge>
                </TechStack>
                <OutlineButton href="#" className="btn-small">
                  <i className="fab fa-github"></i> 프로젝트 보기
                </OutlineButton>
              </ProjectInfo>
            </TeamProjectCard>

            <TeamProjectCard>
              <ProjectImageContainer>
                {/* <Image
                  src="https://via.placeholder.com/400x300"
                  alt="대학교 캡스톤 프로젝트"
                  width={400}
                  height={300}
                /> */}
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectHeader>
                  <ProjectTitleArea>
                    <i className="fas fa-trophy"></i>
                    <div>
                      <Font typo="card_title" as="h4">
                        대학교 캡스톤 프로젝트
                      </Font>
                      <Font typo="caption" as="p">
                        2022.03 - 2022.06
                      </Font>
                    </div>
                  </ProjectTitleArea>
                  <AwardBadge>
                    <i className="fas fa-award"></i> 최우수상
                  </AwardBadge>
                </ProjectHeader>
                <ProjectDescription>
                  <Font typo="body_regular">
                    학교 내 중고거래 플랫폼 개발. 웹과 모바일을 모두 지원하는
                    풀스택 프로젝트
                  </Font>
                </ProjectDescription>

                <TeamComposition>
                  <SectionHeader>
                    <i className="fas fa-users"></i>
                    <Font typo="caption" as="span">
                      팀 구성
                    </Font>
                  </SectionHeader>
                  <TeamRoles>
                    <RoleBadge>
                      <Font typo="badge">풀스택: 2명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">백엔드: 1명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">디자이너: 1명</Font>
                    </RoleBadge>
                    <RoleBadge>
                      <Font typo="badge">PM: 1명</Font>
                    </RoleBadge>
                  </TeamRoles>
                </TeamComposition>

                <Contributions>
                  <SectionHeader>
                    <i className="fas fa-code"></i>
                    <Font typo="caption" as="span">
                      내 기여도
                    </Font>
                  </SectionHeader>
                  <ContributionBars>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        기획
                      </Font>
                      <ProgressBar>
                        <Progress width="40%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        40%
                      </Font>
                    </ContributionItem>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        디자인
                      </Font>
                      <ProgressBar>
                        <Progress width="10%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        10%
                      </Font>
                    </ContributionItem>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        프론트엔드 개발
                      </Font>
                      <ProgressBar>
                        <Progress width="70%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        70%
                      </Font>
                    </ContributionItem>
                    <ContributionItem>
                      <Font typo="caption" as="span">
                        백엔드 개발
                      </Font>
                      <ProgressBar>
                        <Progress width="50%" />
                      </ProgressBar>
                      <Font typo="caption" as="span">
                        50%
                      </Font>
                    </ContributionItem>
                  </ContributionBars>
                </Contributions>

                <TechStack>
                  <TechBadge>
                    <Font typo="badge">React</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">Node.js</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">MongoDB</Font>
                  </TechBadge>
                  <TechBadge>
                    <Font typo="badge">React Native</Font>
                  </TechBadge>
                </TechStack>
                <OutlineButton href="#" className="btn-small">
                  <i className="fab fa-github"></i> 프로젝트 보기
                </OutlineButton>
              </ProjectInfo>
            </TeamProjectCard>
          </TeamProjects>
        )}
      </Container>
    </Activities>
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

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  color: ${colors.darkText};
  border: 2px solid ${colors.darkText};

  &:hover {
    background-color: ${colors.darkText};
    color: ${colors.white};
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
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

const SubsectionTitle = styled.h3`
  text-align: center;
  margin: 2rem 0 1.5rem;
  color: ${colors.gray};

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Activities = styled(Section)``;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.active ? colors.darkText : colors.veryLightGray};
  color: ${(props) => (props.active ? colors.white : colors.gray)};

  &:hover {
    background-color: ${(props) =>
      props.active ? colors.gray : colors.hoverGray};
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const ActivityCard = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  margin-bottom: 2rem;

  p {
    color: ${colors.lightText};
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ActivityBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const ActivityBadge = styled.span`
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

const TeamProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TeamProjectCard = styled.div`
  background: ${colors.white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const ProjectTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: ${colors.darkText};
    font-size: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  h4 {
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

const AwardBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 480px) {
    padding: 0.25rem 0.75rem;
  }
`;

const ProjectDescription = styled.div`
  color: ${colors.lightText};
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const TeamComposition = styled.div`
  margin-bottom: 1.5rem;
`;

const Contributions = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  i {
    color: ${colors.darkText};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const TeamRoles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const RoleBadge = styled.span`
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

const ContributionBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const ContributionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    min-width: 80px;
    color: ${colors.lightText};

    @media (max-width: 480px) {
      min-width: 60px;
      font-size: 0.625rem;
    }

    @media (max-width: 360px) {
      min-width: 50px;
      font-size: 0.5rem;
    }
  }

  span:last-child {
    min-width: 30px;
    text-align: right;

    @media (max-width: 480px) {
      min-width: 25px;
      font-size: 0.625rem;
    }

    @media (max-width: 360px) {
      min-width: 20px;
      font-size: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.625rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background-color: ${colors.borderLight};
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 4px;
  }

  @media (max-width: 360px) {
    height: 3px;
  }
`;

const Progress = styled.div<{ width: string }>`
  height: 100%;
  background-color: ${colors.darkText};
  border-radius: 3px;
  transition: width 1s ease-out;
  width: ${(props) => props.width};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const TechBadge = styled.span`
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
