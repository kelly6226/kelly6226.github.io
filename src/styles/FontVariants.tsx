// 전체 코드에서 사용할 폰트 스타일을 정의합니다.

interface ITypoProps {
  typo?: keyof typeof Config.variants;
}

// 실제로 사용하는 폰트 스타일을 정의
const Config = {
  prop: "typo",
  variants: {
    // 메인 로고
    m01_bold_m: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 700,
      fontSize: "2.2rem",
      lineHeight: "2.8rem",
    },
    // 섹션 타이틀
    section_title: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    // 본문(Regular)
    body_regular: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.6rem",
    },
    // 본문(Bold)
    body_bold: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.6rem",
    },
    // 카드 제목
    card_title: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: "1.5rem",
    },
    // 캡션/설명
    caption: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 400,
      fontSize: "0.85rem",
      lineHeight: "1.2rem",
    },
    // 버튼
    button: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.4rem",
    },
    // 뱃지/태그
    badge: {
      fontFamily: "'Noto Sans KR', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: "1.2rem",
    },
  },
};

export type { ITypoProps };
export { Config };

// 이제 다음과 같이 사용할 수 있습니다:
// <Font typo="m01_bold_m" color="black">
