import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kumud Verma",
  description: "Kumud Verma Portfolio",
};

export default function RootLayout({ children }: Readonly<{children:React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
