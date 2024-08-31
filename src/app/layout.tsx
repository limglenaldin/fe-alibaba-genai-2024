import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
}

export const metadata: Metadata = {
  title: 'Simulator',
  description: 'Simulator',
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-200`}>
        <div className={`bg-white h-screen flex flex-col max-w-md mx-auto`}>
          {children}
        </div>
      </body>
    </html>
  );
}
