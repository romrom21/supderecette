import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import TopBar from "@/components/TopBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sup de recette",
  description: "Your recipe, your way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#e1c98a] h-screen`}>
        <TopBar />
        {children}
        </body>
    </html>
  );
}
