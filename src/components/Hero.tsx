"use client";

import styled from "styled-components";
import Image from "next/image";

const Hero = styled.section`
  padding: 8rem 0 4rem;
  text-align: center;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(71, 85, 105, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(100, 116, 139, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(148, 163, 184, 0.15) 0%,
      transparent 50%
    );
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
`;

const HeroContent = styled.div`
  animation: fadeInUp 1s ease-out;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
  color: var(--color-black);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.8;
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

const PrimaryButton = styled(Button)`
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 1.2rem;
  }
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

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 1.2rem;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <div className="container">
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
            안녕하세요, <Highlight>김개발</Highlight>입니다
          </HeroTitle>
          <HeroSubtitle>2년차 프론트엔드 개발자</HeroSubtitle>
          <HeroDescription>
            사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을
            좋아합니다. 새로운 기술을 배우고 적용하는 것에 열정을 가지고
            있습니다.
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
                backgroundColor: "var(--color-social-bg)",
                borderColor: "var(--color-social-border)",
                color: "var(--color-social-text)",
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
                backgroundColor: "var(--color-social-bg)",
                borderColor: "var(--color-social-border)",
                color: "var(--color-social-text)",
                fontWeight: "700",
              }}
            >
              <i className="fas fa-blog"></i>
              기술 블로그
            </SocialLink>
          </HeroButtons>
        </HeroContent>
      </div>
    </Hero>
  );
};

export default HeroSection;
