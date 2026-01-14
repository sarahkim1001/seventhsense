import type { Metadata } from "next";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import GraphPaperGrid from "@/components/GraphPaperGrid";

const ebGaramond = EB_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seventh Sense",
  description: "Archaeologies of a Cyborgian Organism",
  icons: {
    icon: "/img/seventhsensefavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${ebGaramond.variable}`}>
      <body className="antialiased relative">
        <GraphPaperGrid />
        {children}
      </body>
    </html>
  );
}
