import type { Metadata } from "next";
import { Work_Sans, Lora } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] })
const lora = Lora({ weight: "700", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khiem Nguyen's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className={`${workSans.className} text-espresso-brown`}>{children}</body>
    </html>
  );
}
