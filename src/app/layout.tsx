import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/styles.css"
import Providers from "./components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Store",
  description: "The best store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <Providers>
          {children}
          
        </Providers>
        </body>
    </html>
  );
}
