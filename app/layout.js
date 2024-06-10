/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/jsx-no-comment-textnodes */
import Footer from "@/components/Repeating/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Repeating/Navbar";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funworld Bangalore - Premier Amusement & Water Park",
  description:
    "Discover endless fun at Funworld Bangalore with thrilling rides and captivating shows for all. Create lasting memories in this exciting amusement park, your ultimate destination for family enjoyment!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          {/* Other meta tags can be added here if needed */}
          // eslint-disable-next-line @next/next/next-script-for-ga
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16556847244"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'AW-16556847244');
          </script>
        </Head>
        {/* <GoogleAnalytics GA_TRACKING_ID={"GTM-MTC3R6J3"} /> */}
        <GoogleTagManager gtmId="GTM-MTC3R6J3" />
        <body className={`${inter.className} relative overflow-x-hidden`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
