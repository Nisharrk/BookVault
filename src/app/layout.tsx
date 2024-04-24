import type { Metadata } from "next";
import { Inter, ZCOOL_KuaiLe, Silkscreen } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const zcool = ZCOOL_KuaiLe({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-zcool",
});

const silkscreen = Silkscreen({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const metadata = {
  title: "BookVault",
  description: "Track and learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${zcool.variable} ${silkscreen.variable} text-gray-300 min-h-screen`}
      >
        <div className="mx-20 flex flex-col h-screen">
          <header className="text-center  py-10 text-6xl text-gray-300 font-semibold font-silkscreen">
            BookVault
          </header>
          <div className="flex-grow m-4 ">{children}</div>
          <footer className="text-xl text-center  text-gray-300 font-silkscreen">
            Some Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
