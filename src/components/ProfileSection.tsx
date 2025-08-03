"use client";

import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { Div, A, Span, H1, P } from "@/styles/BseStyledTags";
import { CenterColumn, CenterRow } from "@/styles/BaseComponents";

const ProfileSection = () => {
  return (
    <Container
      id="about"
      width="100vw"
      p={{ zero: "80px 0 32px", lg: "128px 0 64px" }}
      textAlign="center"
    >
      <Content p={{ zero: "16px", lg: "32px" }} width="100%">
        <CenterRow mb="32px" width="180px" height="180px">
          <ProfileImg
            src="/jisooProfile.jpeg"
            alt="Profile"
            width={180}
            height={180}
          />
        </CenterRow>
        <Title fontSize={{ zero: "24px", lg: "32px" }}>
          안녕하세요 <br />
          프론트엔드 개발자 <Span color={colors.black}>신지수</Span>
          입니다
        </Title>
        <P
          fontSize={{ zero: "14px", lg: "16px" }}
          maxWidth="600px"
          margin="0 auto 32px"
          opacity="0.8"
        >
          사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을
          좋아합니다. <br /> 새로운 기술을 배우고 적용하는 것에 열정을 가지고
          있습니다.
        </P>
        <CenterRow
          gridGap="16px"
          mb="16px"
          width="100%"
          flexDirection={{ zero: "column", lg: "row" }}
        >
          <Btn
            href="mailto:kelly6226@naver.com"
            style={{
              backgroundColor: colors.bgWhite,
              borderColor: colors.blue,
              color: colors.darkText,
            }}
          >
            <i className="fas fa-envelope"></i> 연락하기
          </Btn>
          <Btn href="https://github.com/kelly6226" target="_blank">
            <i className="fab fa-github"></i>
            GitHub
          </Btn>
          <Btn href="https://velog.io/@kelly6226/posts" target="_blank">
            <i className="fas fa-blog"></i>
            기술 블로그
          </Btn>
        </CenterRow>
      </Content>
    </Container>
  );
};

export default ProfileSection;

const Container = styled(Div)`
  background: radial-gradient(
      circle at 20% 80%,
      ${colors.gradient1} 0%,
      transparent 50%
    ),
    radial-gradient(circle at 80% 20%, ${colors.gradient2} 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${colors.gradient3} 0%, transparent 50%);
  background-color: ${colors.bgLight};
`;

const Content = styled(CenterColumn)`
  animation: fadeInUp 1s ease-out;
  background: ${colors.transparent};
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px ${colors.shadow};
`;

const ProfileImg = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled(H1)`
  margin-bottom: 16px;
  text-shadow: 0 2px 4px ${colors.shadow};
  font-weight: bold;
`;

const Btn = styled(A)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: ${colors.socialBg};
  color: ${colors.socialDarkBlue};
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 2px solid ${colors.socialBlue};
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  font-size: 13px;
  font-weight: 600;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px -3px ${colors.shadowDark};
  }

  i {
    font-size: 19px;
  }
`;
