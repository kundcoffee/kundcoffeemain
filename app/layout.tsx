import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy Nepali Coffee Beans in Kathmandu | Buy Ground Coffee in Kathmandu",
  description: "Buy authentic Nepali coffee beans and freshly ground coffee in Kathmandu.",
  keywords: [
    "Kund Coffee",
    "Nepali Coffee Beans",
    "Ground Coffee Beans in Kathmandu",
    "Nepali Coffee Beans",
    "Whole Sale Coffee Beans",
    "Coffee Roast",
    "Fresh Coffee Beans",
    "Green Coffee"
  ],

  
  icons: {
    icon: [
      {
        url: "/Logo.jpeg",
        href: "/Logo.jpeg",
      },
    ],
    shortcut: "/Logo.jpeg",
    apple: "/Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-zinc-900`}
      >

            {children}
            <Toaster position="top-right" richColors duration={2000} />

      </body>
    </html>
  );
}
