import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solar Smart Energy",
  description: "ToD/ToU based platform for solar renewable energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <div id="root" className="min-h-screen py-10">{children}</div>

          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-white bg-gray-700 h-16 p-5 fixed w-full bottom-0">
            <h3>&copy;2024 All rights reserved.</h3>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
