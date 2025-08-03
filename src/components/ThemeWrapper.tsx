"use client";

import { ThemeProvider } from "styled-components";
import BasicTheme from "@/styles/breakpoints";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return <ThemeProvider theme={BasicTheme}>{children}</ThemeProvider>;
}
