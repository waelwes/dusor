import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Dosur Technical Consulting | دوسور للاستشارات التقنية",
  description: "شركة دوسور المحدودة للاستشارات التقنية - حلول متكاملة في مجالات إدارة الموارد المائية، التقنيات الزراعية الذكية، والمسح الجيومكاني",
  icons: {
    icon: "/logo/icon.png",
  }
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
