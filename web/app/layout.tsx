import type { Metadata, Viewport } from "next";
import { Commissioner, Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";

const brand = Commissioner({ subsets: ["latin"], variable: "--font-brand", display: "swap" });
const body = Roboto_Flex({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Preparation resources · Bangladesh Bioinformatics Hackathon 2026",
  description:
    "Everything your team needs to prepare for the 1st Bioinformatics Hackathon by RSG Bangladesh: a hands-on guide to computational biology tools from sequence to structure, the four challenge domains, the final presentation, the toolbox and the FAQ.",
  authors: [{ name: "Md. Jubayer Hossain" }],
  creator: "Md. Jubayer Hossain",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5fbf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1513" },
  ],
};

// Applies a saved theme choice before first paint, so there is no flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${brand.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
