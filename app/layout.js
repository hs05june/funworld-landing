import Footer from "@/components/Repeating/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Repeating/Navbar";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funworld Bangalore - Premier Amusement & Water Park Adventures",
  description:
    "Prepare to be amazed by the incredible park attractions at our amusement park in Bangalore. From thrilling rides to captivating shows, there's something for everyone to enjoy. Get ready to experience a world of fun and create memories that will last a lifetime at Fun World!",
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
        </Head>
        <GoogleAnalytics GA_TRACKING_ID={"GTM-MTC3R6J3"} />
        <body className={`${inter.className} relative overflow-x-hidden`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
