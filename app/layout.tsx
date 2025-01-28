import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGroTesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevAla",
  description:
    "A community-driven platform for asking and answering programming questions Get help, share knowledge , and collaborate with developers from around the world",
  icons: {
    icon: "/images/site-logo.svg",
  },
};
const Layout = async ({ children }: { children: ReactNode }) => {

  return (
    <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${spaceGroTesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      
        </body>
    </html>
  );
};

export default Layout;