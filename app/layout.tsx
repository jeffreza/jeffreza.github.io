import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const title = "Syed Jaffar Raza | AI Marketing Leader & Technical Marketing Manager";
const description =
  "AI marketing leader and technical marketing manager in Islamabad with 9+ years across B2B and B2C growth, Meta Ads and Google Ads, lead generation, appointment booking, and CRM automation with GoHighLevel and SAP Cloud.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI marketing leader",
    "technical marketing manager",
    "Meta Ads",
    "Google Ads",
    "B2B marketing",
    "B2C marketing",
    "lead generation",
    "appointment booking",
    "GoHighLevel",
    "CRM automation",
    "marketing automation",
    "ROAS",
    "Islamabad",
  ],
  authors: [{ name: "Syed Jaffar Raza" }],
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "en_US",
    siteName: "Syed Jaffar Raza",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
