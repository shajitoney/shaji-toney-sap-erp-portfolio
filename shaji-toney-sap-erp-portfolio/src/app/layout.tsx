import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaji Toney | SAP & ERP Professional",
  description:
    "Portfolio of Shaji Toney — enterprise POS application support experience and postgraduate ERP studies at KCGI, Japan.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Shaji Toney | SAP & ERP Professional",
    description: "Enterprise Application Support · SAP / ERP · Retail Technology",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
