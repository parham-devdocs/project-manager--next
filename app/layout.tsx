import type { Metadata } from "next";
import {Inter,Poppins,Roboto} from "next/font/google";
import "./globals.css";
import  Sidebar  from '@/components/sidebar';

const inter=Inter({subsets:["latin"]})
const poppins = Roboto({
  subsets: ["latin"],
    variable: "--font-roboto",
    weight:["100","300","400","500","700"]
  
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased flex overflow-auto`}>
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
