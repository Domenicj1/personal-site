import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { profile } from "@/data/profile";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: profile.shortName,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        {children}
        <footer className="no-print mx-auto max-w-3xl border-t border-border px-4 py-10 text-sm text-muted sm:px-6">
          © {new Date().getFullYear()} {profile.shortName}
        </footer>
      </body>
    </html>
  );
}
