import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Foot from "@/components/footer";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SARIF Industries | Home",
  description: "",
  icons: {icon: "/favicon.svg"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  );
}
