import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | React, Vue, Angular, Next.js",
    default: "Frontend Jobs | React, Vue, Angular, Next.js",
  },
  description:
    "Find new Frontend job. React.js, Angular, Vue.js, Svelte, Next.js, Nuxt.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
