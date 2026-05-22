import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadataBase = new URL("https://dusor.vercel.app");

export const metadata: Metadata = {
  title: "Dosur Technical Consulting | دوسور للاستشارات التقنية",
  description:
    "شركة دوسور المحدودة للاستشارات التقنية - حلول متكاملة في مجالات إدارة الموارد المائية، التقنيات الزراعية الذكية، والمسح الجيومكاني",
  icons: {
    // keep the small favicon/icon for browser tabs
    icon: "/logo/icon.png",
  },
  openGraph: {
    title: "Dosur Technical Consulting | دوسور للاستشارات التقنية",
    description:
      "شركة دوسور المحدودة للاستشارات التقنية - حلول متكاملة في مجالات إدارة الموارد المائية، التقنيات الزراعية الذكية، والمسح الجيومكاني",
    // use the full logo for social previews (WhatsApp, Facebook, etc.)
    images: ["/logo/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dosur Technical Consulting | دوسور للاستشارات التقنية",
    description:
      "شركة دوسور المحدودة للاستشارات التقنية - حلول متكاملة في مجالات إدارة الموارد المائية، التقنيات الزراعية الذكية، والمسح الجيومكاني",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
