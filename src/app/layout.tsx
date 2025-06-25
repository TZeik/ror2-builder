import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DragDropProvider } from "@/context/DragDropContext";
import { SurvivorProvider } from "@/context/SurvivorContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeik's Risk of Rain 2 Toolkit",
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
        
        <SurvivorProvider>
          <DragDropProvider>
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#1F2937",
                  color: "#F9FAFB",
                  border: "1px solid #374151",
                },
              }}
            />
            <Header />
            {children}
            <Footer />
          </DragDropProvider>
        </SurvivorProvider>
      </body>
    </html>
  );
}
