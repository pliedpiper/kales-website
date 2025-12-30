import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

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
  title: "Kace Barthlome | Hair Stylist & Barber",
  description:
    "Licensed cosmetologist and barber in Colorado. Specializing in trending haircuts, fades, textured styles, hair coloring, and precision grooming.",
  keywords: [
    "hair stylist",
    "barber",
    "Colorado",
    "haircuts",
    "fades",
    "hair coloring",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Kace Barthlome | Hair Stylist & Barber",
    description:
      "Licensed cosmetologist and barber in Colorado. Specializing in trending haircuts, fades, textured styles, and precision grooming.",
    type: "website",
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
