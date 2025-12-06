import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elizabeth Muthoni | Fullstack Engineer & AWS Solutions Architect",
  description:
    "Portfolio of Elizabeth Muthoni - Fullstack Engineer, AWS Solutions Architect, and Cloud Security Specialist from Mombasa, Kenya. Expertise in Ruby on Rails, Python, TypeScript, AWS, and cloud security.",
  keywords: [
    "Elizabeth Muthoni",
    "Fullstack Engineer",
    "AWS Solutions Architect",
    "Cloud Security",
    "Ruby on Rails",
    "Python Developer",
    "Mombasa Kenya",
  ],
  authors: [{ name: "Elizabeth Muthoni" }],
  openGraph: {
    title: "Elizabeth Muthoni | Fullstack Engineer & AWS Solutions Architect",
    description:
      "Portfolio showcasing cloud architecture, backend development, and security projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}
      </body>
    </html>
  );
}
