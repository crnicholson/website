import "./globals.css";
import { useEffect } from "react";
import Footer from "@/components/footer";
import GrainControls from "@/components/grainControls";
import EasterEggs from "@/components/easterEggs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Charlie Nicholson",
  description: "Personal website of Charlie Nicholson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <Analytics />
        <SpeedInsights />
      </head>
      <body
        className="antialiased vsc-initialized text-primary min-h-screen w-full bg-bg flex flex-col justify-center items-center grain-overlay"
      >
        <div id="main-content" className="w-full flex flex-col justify-center items-center min-h-screen">
          {children}
          <GrainControls />
        </div>
        <EasterEggs />
      </body>
    </html>
  );
}
