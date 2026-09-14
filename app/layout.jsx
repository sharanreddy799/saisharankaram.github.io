import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Sai Sharan Karam",
  description: "Personal Portifolio of sai sharan karam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Header />
        <SpeedInsights />
        <Analytics />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
