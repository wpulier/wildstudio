import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import LegendaryCursorProvider from "@/components/LegendaryCursorProvider";

export const metadata: Metadata = {
  title: "Wild Studios | Design for the Digital Age",
  description: "Wild Studios designs products for the future. From digital interfaces to brand identities to immersive apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] bg-[length:20px_20px]">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow mb-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 