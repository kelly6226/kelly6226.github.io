"use client";

import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import Font from "./Font";

const HeroSection = () => {
  return (
    <Hero id="about" className="container">
      <HeroContent>
        <ProfileImage>
          {/* <ProfileImg
            src="https://via.placeholder.com/150"
            alt="Profile"
            width={150}
            height={150}
          /> */}
        </ProfileImage>
        <HeroTitle>
          <Font typo="m01_bold_m">
            안녕하세요, <Highlight>김개발</Highlight>입니다
          </Font>
        </HeroTitle>
        <HeroSubtitle>
          <Font typo="section_title">2년차 프론트엔드 개발자</Font>
        </HeroSubtitle>
        <HeroDescription>
          <Font typo="body_regular">
            사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을
            좋아합니다. 새로운 기술을 배우고 적용하는 것에 열정을 가지고
            있습니다.
          </Font>
        </HeroDescription>
        <HeroButtons>
          <PrimaryButton href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i> 연락하기
          </PrimaryButton>
          <SocialLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colors.socialBg,
              borderColor: colors.socialBlue,
              color: colors.socialDarkBlue,
              fontWeight: "700",
            }}
          >
            <i className="fab fa-github"></i>
            GitHub
          </SocialLink>
          <SocialLink
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colors.socialBg,
              borderColor: colors.socialBlue,
              color: colors.socialDarkBlue,
              fontWeight: "700",
            }}
          >
            <i className="fas fa-blog"></i>
            기술 블로그
          </SocialLink>
        </HeroButtons>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  padding: 8rem 0 4rem;
  text-align: center;
  background: radial-gradient(
      circle at 20% 80%,
      ${colors.gradient1} 0%,
      transparent 50%
    ),
    radial-gradient(circle at 80% 20%, ${colors.gradient2} 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${colors.gradient3} 0%, transparent 50%);
  background-color: ${colors.bgLight};
  color: ${colors.darkText};

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 0 2rem;
  }
`;

const HeroContent = styled.div`
  animation: fadeInUp 1s ease-out;
  background: ${colors.transparent};
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px ${colors.shadow};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProfileImage = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImg = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px ${colors.shadow};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: ${colors.black};
`;

const HeroSubtitle = styled.p`
  margin-bottom: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const HeroDescription = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
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

const PrimaryButton = styled(Button)`
  background-color: ${colors.bgWhite};
  color: ${colors.darkText};
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px ${colors.shadow};
  border: 2px solid ${colors.blue};

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
    transform: translateY(-3px);
    box-shadow: 0 8px 15px -3px ${colors.shadowDark};
  }

  i {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.bgWhite};
  color: ${colors.darkText};
  text-decoration: none;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  border: 2px solid ${colors.blue};
  box-shadow: 0 4px 6px -1px ${colors.shadow};

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
    transform: translateY(-3px);
    box-shadow: 0 8px 15px -3px ${colors.shadowDark};
  }

  i {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: 360px) {
    padding: 0.625rem 1rem;
    font-size: 0.75rem;
  }
`;
