"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  color: #1f2937;
  border: 2px solid #1f2937;

  &:hover {
    background-color: #1f2937;
    color: #ffffff;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
`;

const SubsectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0 1.5rem;
  color: #374151;
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
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.active ? "#1f2937" : "#f3f4f6")};
  color: ${(props) => (props.active ? "#ffffff" : "#374151")};

  &:hover {
    background-color: ${(props) => (props.active ? "#374151" : "#e5e7eb")};
  }
`;

const ActivityCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  p {
    color: #6b7280;
    margin-bottom: 1rem;
  }
`;

const ActivityBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ActivityBadge = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const TeamProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TeamProjectCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
    color: #1f2937;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

const AwardBadge = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
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
  font-weight: 500;
  font-size: 0.875rem;

  i {
    color: #1f2937;
  }
`;

const TeamRoles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const RoleBadge = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ContributionBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContributionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;

  span:first-child {
    min-width: 80px;
    color: #6b7280;
  }

  span:last-child {
    min-width: 30px;
    font-weight: 500;
    text-align: right;
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled.div<{ width: string }>`
  height: 100%;
  background-color: #1f2937;
  border-radius: 3px;
  transition: width 1s ease-out;
  width: ${(props) => props.width};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background-color: #1f2937;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-size: 2rem;
    color: #1f2937;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

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
                  개인 생산성 향상을 위한 칸반 보드 스타일의 작업 관리
                  애플리케이션입니다. React와 TypeScript를 사용하여
                  개발했습니다.
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
                  실시간 날씨 정보와 5일 예보를 제공하는 반응형 웹
                  애플리케이션입니다. OpenWeather API를 활용했습니다.
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
                  가계부 관리 앱 개발로 우수상 수상. React Native와 Firebase를
                  활용한 모바일 앱 개발
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
                  학교 내 중고거래 플랫폼 개발. 웹과 모바일을 모두 지원하는
                  풀스택 프로젝트
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
