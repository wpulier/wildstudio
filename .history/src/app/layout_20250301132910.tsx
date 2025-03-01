import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow mb-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 