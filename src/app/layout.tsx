import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DragDropProvider } from "@/context/DragDropContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Risk of Rain 2 Build Planner",
  description: "Plan and share your perfect Risk of Rain 2 builds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 text-white min-h-screen`}
      >
        <DragDropProvider>{children}</DragDropProvider>
      </body>
    </html>
  );
}
