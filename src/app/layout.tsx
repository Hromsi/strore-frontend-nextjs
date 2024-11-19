import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/styles.css"
import Providers from "./components/Providers";
import Header from "./components/ui/Header/Header";

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
	title: "Tech Heim: Innovative Electronics Store",
	description: "Discover cutting-edge technology products. High-quality electronics directly from manufacturers. Your gateway to innovation.",
  icons: "/logo.svg",
	openGraph: {
		title: "Tech Heim - Your Electronics Innovation Hub",
		description: "Cutting-edge electronics directly from manufacturers",
		siteName: "Tech Heim",
		images: "/logo.svg",
		type: "website",
		locale: "en_US",
    url: process.env.PUBLIC_URL
	}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
