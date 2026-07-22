import { Geist, Geist_Mono } from "next/font/google";
import ChromeGate from "@/components/site/ChromeGate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "wahab js — Sections & Elements",
  description:
    "A library of React + Tailwind sections and elements, with live previews and copyable source.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        suppressHydrationWarning
      >
        <ChromeGate>{children}</ChromeGate>
      </body>
    </html>
  );
}
