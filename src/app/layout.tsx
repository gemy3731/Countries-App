"use client";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeProviderWrapper from "./_components/ThemeProviderWrapper";
import Navbar from "./_components/Navbar";


const NunitoSans=Nunito_Sans({
  subsets:['latin'],
  weight:[ '300', '600', '800']
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${NunitoSans.className} antialiased dark:bg-slate-500`}
      >
          <ThemeProviderWrapper>
            <Navbar/>
          {children}
          </ThemeProviderWrapper>
      </body>
    </html>
  );
}
