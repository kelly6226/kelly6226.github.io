"use client";

import styled, { css } from "styled-components";
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
} from "styled-system";
import BasicTheme from "@/styles/breakpoints";

export interface ITypoProps {
  typo?: string;
}

const styles = compose(
  color,
  flexbox,
  grid,
  layout,
  position,
  border,
  space,
  typography,
  background
);

export interface ITagProps
  extends ColorProps,
    FlexboxProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    TypographyProps,
    GridProps,
    BackgroundProps,
    SpaceProps,
    ITypoProps {}

const A = styled.a<ITagProps>`
  ${styles}
`;

const Div = styled.div<ITagProps>`
  ${styles}
  white-space: pre-line;
`;

const H1 = styled.h1<ITagProps>`
  ${styles}
`;

const H2 = styled.h2<ITagProps>`
  ${styles}
`;

const H3 = styled.h3<ITagProps>`
  ${styles}
`;

const H4 = styled.h4<ITagProps>`
  ${styles}
`;

const H5 = styled.h5<ITagProps>`
  ${styles}
`;

const H6 = styled.h6<ITagProps>`
  ${styles}
`;

const P = styled.p<ITagProps>`
  ${styles}
`;

const Img = styled.img<ITagProps>`
  ${styles}
`;

const Span = styled.span<ITagProps>`
  ${styles}
`;

const Input = styled.input<ITagProps>`
  outline: 0;
  border: none;
  ${styles}
`;

const TextArea = styled.textarea<ITagProps>`
  outline: 0;
  border: none;
  white-space: pre-line;
  word-break: break-word;
  resize: vertical;
  ${styles}
`;

const Option = styled.option<ITagProps>`
  ${styles}
`;

const Ol = styled.ol<ITagProps>`
  ${styles}
`;

const Ul = styled.ul<ITagProps>`
  ${styles}
`;

const Li = styled.li<ITagProps>`
  ${styles}
`;

const Button = styled.button<ITagProps>`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  ${styles}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

const I = styled.i<ITagProps>`
  ${styles}
`;

export function withStyle<T = object>(Component: React.ComponentType<T>) {
  return styled(Component)<ITagProps & T>`
    ${styles}
  `;
}

export {
  A,
  Button,
  Div,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  I,
  Img,
  Input,
  Li,
  Ol,
  Option,
  P,
  Span,
  TextArea,
  Ul,
};
