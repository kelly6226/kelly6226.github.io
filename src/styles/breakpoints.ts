// 반응형 디자인을 위한 breakpoint 정의
export const breakpoints = {
  zero: "0px",
  sm: "390px",
  md: "780px",
  lg: "1280px",
} as const;

export const mediaQueries = {
  zero: `@media (max-width: ${breakpoints.zero})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
} as const;

export const media = {
  zero: `@media (max-width: ${breakpoints.zero})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type MediaQuery = keyof typeof mediaQueries;
