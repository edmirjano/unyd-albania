import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: "UN Youth Delegate Program Albania | UNA Albania",
  description: "Programi i Delegatëve të Rinj të Kombeve të Bashkuara në Shqipëri. Aplikimet për 2025 janë mbyllur - përgatitu për 2026! Pjesë e United Nations Association Albania.",
  keywords: "UN Youth Delegate, Albania, United Nations, UNA Albania, diplomat, youth program, Kombeve të Bashkuara",
  authors: [{ name: "UNA Albania" }],
  openGraph: {
    title: "UN Youth Delegate Program Albania",
    description: "Përgatitu për Programin e Delegatëve të Rinj të Kombeve të Bashkuara 2026",
    url: "https://delegate.unaalbania.org",
    siteName: "UN Youth Delegate Albania",
    locale: "sq_AL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UN Youth Delegate Program Albania",
    description: "Përgatitu për Programin e Delegatëve të Rinj të Kombeve të Bashkuara 2026",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className="antialiased">
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
