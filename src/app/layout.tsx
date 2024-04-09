import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunas Financial Application",
  description: "Front of the Hunas financial application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-gray-100 text-black flex",
        inter.className)}>
        {/* {SideBar} */}
        <SideNavbar />
        {/* Main Page */}
        <div className="p-4 sm:p-5 lg:p-8 w-full">{children}</div>
      </body>
    </html>
  );
}