/* eslint-disable @next/next/no-page-custom-font */
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AutoConnectProvider } from "@/components/AutoConnectProvider";
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from "@/components/WalletProvider";
import TopLoader from "@/components/TopLoader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Action X",
  description: "Action X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Katibeh&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@kayx86" /> 
        <meta name="twitter:title" content="Demo ActionX" /> 
        <meta name="twitter:description" content="Demo ActionX" /> 
        <meta name="twitter:player" content="https://aptosconnect.app/dashboard/main-account/tokens/" />
        <meta name="twitter:player:width" content="460" />
        <meta name="twitter:player:height" content="860" />
        <meta name="twitter:image" content="https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_BLK.png" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="test" />
        <meta property="og:description" content="test" />
        <meta property="og:image" content="https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_BLK.png" />
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-2YFXLDLV8N`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2YFXLDLV8N');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <AutoConnectProvider>
          <WalletProvider>
            <TopLoader />
            {children}
            <Toaster />
          </WalletProvider>
        </AutoConnectProvider>
      </body>
    </html>
  );
}
