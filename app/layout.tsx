import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
      After extending the tailwind css now we are using the extended theme class "dark" for accessing its 2nd object that hold the value of our dark color.
      */}
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
    </html>
  );
}
