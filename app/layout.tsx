import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/navbar";
//import fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display:"swap"
});

const spaceGroTask = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display:"swap"
});

export const metadata: Metadata = {
  title: "Dev Jawaher",
  description:  "A community-driven platform for asking and answering programming questions Get help, share knowledge , and collaborate with developers from around the world",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${spaceGroTask.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
