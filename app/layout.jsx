import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Sai Sharan Karam",
  description: "Personal Portifolio of sai sharan karam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={jetBrains_Mono.variable}>
        <Header />
        <SpeedInsights />
        <Analytics />

        <PageTransition>{children}</PageTransition>
        {/* <div>{children}</div> <StairTransition /> <PageTransition>{children}</PageTransition>*/}
        <Footer />
      </body>
    </html>
  );
}
