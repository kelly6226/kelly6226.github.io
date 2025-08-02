// 공통 색상 변수들
export const colors = {
  // 기본 색상
  white: "#ffffff",
  black: "#000000",

  // 실제 사용 중인 색상들
  primary: "#1f2937", // 메인 색상 (진한 회색)
  secondary: "#374151", // 보조 색상 (중간 회색)
  text: {
    primary: "#1f2937", // 주요 텍스트
    secondary: "#6b7280", // 보조 텍스트
  },
  background: {
    primary: "#ffffff", // 주요 배경 (흰색)
    secondary: "#f8fafc", // 보조 배경 (매우 연한 회색)
    light: "#f3f4f6", // 연한 배경
    lighter: "#f9fafb", // 더 연한 배경
  },
  border: {
    primary: "#e5e7eb", // 주요 테두리
    secondary: "#d1d5db", // 보조 테두리
  },
};

// CSS 변수로 내보내기
export const cssVariables = `
  :root {
    --color-white: ${colors.white};
    --color-black: ${colors.black};
    
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    
    --color-bg-primary: ${colors.background.primary};
    --color-bg-secondary: ${colors.background.secondary};
    --color-bg-light: ${colors.background.light};
    --color-bg-lighter: ${colors.background.lighter};
    
    --color-border-primary: ${colors.border.primary};
    --color-border-secondary: ${colors.border.secondary};
  }
`;
