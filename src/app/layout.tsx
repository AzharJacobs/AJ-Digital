import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AJ Digital Studio - Established Excellence in Digital Solutions",
  description: "At AJ Digital Studio, we believe every small business deserves a unique digital presence. We deliver sophisticated solutions with timeless quality.",
  keywords: "digital solutions, web development, graphic design, responsive design, professional logos, business cards, brand identity",
  authors: [{ name: "AJ Digital Studio" }],
  openGraph: {
    title: "AJ Digital Studio - Digital Solutions",
    description: "Established excellence in digital solutions for small businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        ></Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Navigation />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
