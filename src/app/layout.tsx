import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김개발 - 프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자 김개발의 포트폴리오 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
