import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beyonddhaka.com"),
  title: {
    default: "Beyond Dhaka | Digital Marketing Consultant",
    template: "%s | Beyond Dhaka",
  },
  description:
    "We Help Brands Grow Beyond Boundaries. Beyond Dhaka offers expert Search Engine Optimization (SEO), Social Media Marketing, Paid Advertising, Content Creation, and Website Development services in Dhaka, Bangladesh.",
  keywords: [
    "Digital Marketing Consultant",
    "SEO",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Paid Advertising",
    "Facebook Ads",
    "Google Ads",
    "Content Creation",
    "Lead Generation",
    "Website Development",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Mohammad Motiur Rahman Sajib" }],
  openGraph: {
    title: "Beyond Dhaka | Digital Marketing Consultant",
    description:
      "Create • Connect • Inspire. We help brands grow beyond boundaries with data-driven digital marketing and web development services.",
    url: "https://www.beyonddhaka.com",
    siteName: "Beyond Dhaka",
    locale: "en_US",
    type: "website",
    /* images: [
      {
        url: "/og-image.jpg", // আপনার public ফোল্ডারে একটি ব্যানার বা লোগো অ্যাড করে এই লিঙ্কটি আপডেট করে নিবেন
        width: 1200,
        height: 630,
        alt: "Beyond Dhaka - Digital Marketing Agency",
      },
    ], 
    */
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Dhaka | Grow Beyond Boundaries",
    description:
      "Expert Digital Marketing Consultant in Dhaka. SEO, Social Media, Paid Ads, and more.",
    creator: "@BeyondDhaka",
  },
  alternates: {
    canonical: "https://www.beyonddhaka.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Add this line to ignore attribute mismatches from browser extensions
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
