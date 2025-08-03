"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BasicTheme from "@/styles/breakpoints";

const { colors } = BasicTheme;
import { Div, A } from "@/styles/BaseStyledTags";

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = React.useState<"personal" | "team">(
    "personal"
  );

  return (
    <Activities>
      <Container>
        <SectionTitle>Activities & Team Projects</SectionTitle>

        {/* 동아리 활동 & 교육 */}
        <ActivityGrid>
          <ActivityCard>
            <CardHeader>
              <i className="fas fa-users"></i>
              <div>
                <h3>IT 동아리 'CodeCraft'</h3>
                <p>2020.03 - 2022.02 • 부회장</p>
              </div>
            </CardHeader>
            <p>
              대학교 IT 동아리에서 웹 개발 스터디를 주도하고, 신입 회원들을 위한
              프로그래밍 교육을 담당했습니다. 동아리 내 프로젝트 기획 및 개발을
              리드하며 팀워크와 리더십을 기를 수 있었습니다.
            </p>
            <ActivityBadges>
              <ActivityBadge>웹 개발 스터디 리더</ActivityBadge>
              <ActivityBadge>신입생 멘토링</ActivityBadge>
              <ActivityBadge>프로젝트 기획</ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-laptop-code"></i>
              <div>
                <h3>알고리즘 스터디</h3>
                <p>2021.09 - 2022.06 • 팀장</p>
              </div>
            </CardHeader>
            <p>
              코딩 테스트 대비를 위한 알고리즘 스터디를 운영했습니다. 주 2회
              문제 풀이 세션과 코드 리뷰를 진행하여 팀원들의 알고리즘 실력을
              향상시켰습니다.
            </p>
            <ActivityBadges>
              <ActivityBadge>알고리즘 문제 풀이</ActivityBadge>
              <ActivityBadge>코드 리뷰</ActivityBadge>
              <ActivityBadge>스터디 운영</ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-chalkboard-teacher"></i>
              <div>
                <h3>프론트엔드 개발 교육</h3>
                <p>2022.03 - 2022.08 • 강사</p>
              </div>
            </CardHeader>
            <p>
              대학교 내 프론트엔드 개발 동아리에서 React와 JavaScript 기초를
              가르치는 강사로 활동했습니다. 실습 중심의 교육으로 학생들의 실무
              역량을 키웠습니다.
            </p>
            <ActivityBadges>
              <ActivityBadge>React 강의</ActivityBadge>
              <ActivityBadge>JavaScript 기초</ActivityBadge>
              <ActivityBadge>실습 지도</ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-certificate"></i>
              <div>
                <h3>웹 개발 부트캠프</h3>
                <p>2021.07 - 2021.08 • 수료</p>
              </div>
            </CardHeader>
            <p>
              실무 중심의 웹 개발 부트캠프에서 풀스택 개발 과정을 수료했습니다.
              팀 프로젝트를 통해 협업 경험을 쌓고 실제 서비스를 개발하는 경험을
              했습니다.
            </p>
            <ActivityBadges>
              <ActivityBadge>풀스택 개발</ActivityBadge>
              <ActivityBadge>팀 프로젝트</ActivityBadge>
              <ActivityBadge>실무 경험</ActivityBadge>
            </ActivityBadges>
          </ActivityCard>

          <ActivityCard>
            <CardHeader>
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h3>데이터 분석 특강</h3>
                <p>2021.03 - 2021.06 • 참여</p>
              </div>
            </CardHeader>
            <p>
              대학교에서 진행된 데이터 분석 특강에 참여하여 Python과 데이터
              시각화 기법을 학습했습니다. 실제 데이터를 활용한 프로젝트를
              완료했습니다.
            </p>
            <ActivityBadges>
              <ActivityBadge>Python</ActivityBadge>
              <ActivityBadge>데이터 시각화</ActivityBadge>
              <ActivityBadge>데이터 분석</ActivityBadge>
            </ActivityBadges>
          </ActivityCard>
        </ActivityGrid>

        {/* 탭 네비게이션 */}
        <TabContainer>
          <TabButton
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            개인 프로젝트
          </TabButton>
          <TabButton
            active={activeTab === "team"}
            onClick={() => setActiveTab("team")}
          >
            팀 프로젝트 & 해커톤
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
                      <h4>Task Management App</h4>
                      <p>2024.01 - 2024.03</p>
                    </div>
                  </ProjectTitleArea>
                </ProjectHeader>
                <ProjectDescription>
                  <p>
                    개인 생산성 향상을 위한 칸반 보드 스타일의 작업 관리
                    애플리케이션입니다. React와 TypeScript를 사용하여
                    개발했습니다.
                  </p>
                </ProjectDescription>

                <TechStack>
                  <TechBadge>React</TechBadge>
                  <TechBadge>TypeScript</TechBadge>
                  <TechBadge>Supabase</TechBadge>
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
                      <h4>Weather App</h4>
                      <p>2023.12 - 2024.01</p>
                    </div>
                  </ProjectTitleArea>
                </ProjectHeader>
                <ProjectDescription>
                  <p>
                    실시간 날씨 정보와 5일 예보를 제공하는 반응형 웹
                    애플리케이션입니다. OpenWeather API를 활용했습니다.
                  </p>
                </ProjectDescription>

                <TechStack>
                  <TechBadge>React</TechBadge>
                  <TechBadge>OpenWeather API</TechBadge>
                  <TechBadge>PWA</TechBadge>
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
                      <h4>2024 핀테크 해커톤</h4>
                      <p>2024.08</p>
                    </div>
                  </ProjectTitleArea>
                  <AwardBadge>
                    <i className="fas fa-award"></i> 우수상 (2위)
                  </AwardBadge>
                </ProjectHeader>
                <ProjectDescription>
                  <p>
                    가계부 관리 앱 개발로 우수상 수상. React Native와 Firebase를
                    활용한 모바일 앱 개발
                  </p>
                </ProjectDescription>

                {/* 팀 구성 */}
                <TeamComposition>
                  <SectionHeader>
                    <i className="fas fa-users"></i>
                    <span>팀 구성</span>
                  </SectionHeader>
                  <TeamRoles>
                    <RoleBadge>프론트엔드: 1명</RoleBadge>
                    <RoleBadge>백엔드: 1명</RoleBadge>
                    <RoleBadge>디자이너: 1명</RoleBadge>
                    <RoleBadge>기획자: 1명</RoleBadge>
                  </TeamRoles>
                </TeamComposition>

                {/* 기여도 */}
                <Contributions>
                  <SectionHeader>
                    <i className="fas fa-code"></i>
                    <span>내 기여도</span>
                  </SectionHeader>
                  <ContributionBars>
                    <ContributionItem>
                      <span>기획</span>
                      <ProgressBar>
                        <Progress width="30%" />
                      </ProgressBar>
                      <span>30%</span>
                    </ContributionItem>
                    <ContributionItem>
                      <span>디자인</span>
                      <ProgressBar>
                        <Progress width="20%" />
                      </ProgressBar>
                      <span>20%</span>
                    </ContributionItem>
                    <ContributionItem>
                      <span>프론트엔드 개발</span>
                      <ProgressBar>
                        <Progress width="80%" />
                      </ProgressBar>
                      <span>80%</span>
                    </ContributionItem>
                  </ContributionBars>
                </Contributions>

                <TechStack>
                  <TechBadge>React Native</TechBadge>
                  <TechBadge>Firebase</TechBadge>
                  <TechBadge>TypeScript</TechBadge>
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
                      <h4>대학교 캡스톤 프로젝트</h4>
                      <p>2022.03 - 2022.06</p>
                    </div>
                  </ProjectTitleArea>
                  <AwardBadge>
                    <i className="fas fa-award"></i> 최우수상
                  </AwardBadge>
                </ProjectHeader>
                <ProjectDescription>
                  <p>
                    학교 내 중고거래 플랫폼 개발. 웹과 모바일을 모두 지원하는
                    풀스택 프로젝트
                  </p>
                </ProjectDescription>

                <TeamComposition>
                  <SectionHeader>
                    <i className="fas fa-users"></i>
                    <span>팀 구성</span>
                  </SectionHeader>
                  <TeamRoles>
                    <RoleBadge>풀스택: 2명</RoleBadge>
                    <RoleBadge>백엔드: 1명</RoleBadge>
                    <RoleBadge>디자이너: 1명</RoleBadge>
                    <RoleBadge>PM: 1명</RoleBadge>
                  </TeamRoles>
                </TeamComposition>

                <Contributions>
                  <SectionHeader>
                    <i className="fas fa-code"></i>
                    <span>내 기여도</span>
                  </SectionHeader>
                  <ContributionBars>
                    <ContributionItem>
                      <span>기획</span>
                      <ProgressBar>
                        <Progress width="40%" />
                      </ProgressBar>
                      <span>40%</span>
                    </ContributionItem>
                    <ContributionItem>
                      <span>디자인</span>
                      <ProgressBar>
                        <Progress width="10%" />
                      </ProgressBar>
                      <span>10%</span>
                    </ContributionItem>
                    <ContributionItem>
                      <span>프론트엔드 개발</span>
                      <ProgressBar>
                        <Progress width="70%" />
                      </ProgressBar>
                      <span>70%</span>
                    </ContributionItem>
                    <ContributionItem>
                      <span>백엔드 개발</span>
                      <ProgressBar>
                        <Progress width="50%" />
                      </ProgressBar>
                      <span>50%</span>
                    </ContributionItem>
                  </ContributionBars>
                </Contributions>

                <TechStack>
                  <TechBadge>React</TechBadge>
                  <TechBadge>Node.js</TechBadge>
                  <TechBadge>MongoDB</TechBadge>
                  <TechBadge>React Native</TechBadge>
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
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Section = styled.section`
  padding: 64px 0;

  @media (max-width: 768px) {
    padding: 48px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
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

const SubsectionTitle = styled.h3`
  text-align: center;
  margin: 32px 0 24px;
  color: ${colors.gray};

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Activities = styled(Section)``;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
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
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ActivityCard = styled.div`
  background: ${colors.white};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  margin-bottom: 32px;

  p {
    color: ${colors.lightText};
    margin-bottom: 16px;

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

const ActivityBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const ActivityBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 4px 12px;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 2px 8px;
  }

  @media (max-width: 360px) {
    padding: 2px 6px;
  }
`;

const TeamProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TeamProjectCard = styled.div`
  background: ${colors.white};
  border-radius: 16px;
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
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const ProjectTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  i {
    color: ${colors.darkText};
    font-size: 24px;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  h4 {
    margin-bottom: 4px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const AwardBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 8px 16px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 480px) {
    padding: 4px 12px;
  }
`;

const ProjectDescription = styled.div`
  color: ${colors.lightText};
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TeamComposition = styled.div`
  margin-bottom: 24px;
`;

const Contributions = styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  i {
    color: ${colors.darkText};
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TeamRoles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const RoleBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 4px 12px;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 2px 8px;
  }

  @media (max-width: 360px) {
    padding: 2px 6px;
  }
`;

const ContributionBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const ContributionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span:first-child {
    min-width: 80px;
    color: ${colors.lightText};

    @media (max-width: 480px) {
      min-width: 60px;
      font-size: 10px;
    }

    @media (max-width: 360px) {
      min-width: 50px;
      font-size: 8px;
    }
  }

  span:last-child {
    min-width: 30px;
    text-align: right;

    @media (max-width: 480px) {
      min-width: 25px;
      font-size: 10px;
    }

    @media (max-width: 360px) {
      min-width: 20px;
      font-size: 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }

  @media (max-width: 360px) {
    font-size: 8px;
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
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const TechBadge = styled.span`
  background-color: ${colors.darkText};
  color: ${colors.white};
  padding: 4px 12px;
  border-radius: 9999px;

  @media (max-width: 480px) {
    padding: 2px 8px;
  }

  @media (max-width: 360px) {
    padding: 2px 6px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  i {
    font-size: 32px;
    color: ${colors.darkText};

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  h3 {
    margin-bottom: 4px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    color: ${colors.lightText};

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;
