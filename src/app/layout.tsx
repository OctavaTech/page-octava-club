import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./contexts/ModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Octava Club – Bogotá",
  description: "Vive la noche como nunca antes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
