import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlie Nicholson's Personal Website",
  description: "Charlie Nicholson's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
