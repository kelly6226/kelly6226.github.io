import type { Metadata } from "next";
import "@/styles/globals.css";
import ThemeWrapper from "@/components/ThemeWrapper";

export const metadata: Metadata = {
  title: "jisoo portfolio",
  description: "프론트엔드 개발자 신지수입니다.",
  openGraph: {
    title: "jisoo portfolio",
    description: "프론트엔드 개발자 신지수입니다.",
  },
  icons: {
    icon: "/portfolio/metaImg.png",
    apple: "/portfolio/metaImg.png",
  },
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
      <body className="antialiased">
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
