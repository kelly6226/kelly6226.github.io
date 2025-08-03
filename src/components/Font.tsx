"use client";

import { Span } from "@/styles/BseStyledTags";
import { ITypoProps } from "@/styles/FontVariants";

interface FontProps extends ITypoProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function Font({ children, typo, ...props }: FontProps) {
  return (
    <Span typo={typo} {...props}>
      {children}
    </Span>
  );
}
