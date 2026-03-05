import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);
const socialImage = "/gallery/headshot.png";
const siteTitle = "Kace Barthlome | Hair Stylist & Barber";
const siteDescription =
  "Licensed cosmetologist and barber in Mississippi. Specializing in trending haircuts, fades, textured styles, hair coloring, and precision grooming.";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "hair stylist",
    "barber",
    "Mississippi",
    "haircuts",
    "fades",
    "hair coloring",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 1200,
        alt: "Kace Barthlome portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${syne.variable} font-[family-name:var(--font-outfit)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
