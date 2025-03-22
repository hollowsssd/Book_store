"use client";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/compoments/Header";
import LoginModal from "@/compoments/LoginModal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showModal, setShowModal] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header handleShowModal={() => setShowModal(true)} />
        {children}
        {showModal && <LoginModal handleShowModal={() => setShowModal(false)} />}
      </body>
    </html>
  );
}
