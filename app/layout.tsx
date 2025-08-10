import "./globals.css";
import Footer from "@/components/footer";
import GrainControls from "@/components/grainControls";
import EasterEggs from "@/components/easterEggs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Charle Nicholson",
  description: "Peronsal website of Charle Nicholson",
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
        {children}
        <GrainControls />
        <EasterEggs />
      </body>
    </html>
  );
}
