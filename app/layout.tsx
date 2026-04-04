import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genie9.dev — Build Websites That Bring You Clients",
  description:
    "Genie9.dev helps businesses grow with high-performing websites, social media management, and video editing. Not just a portfolio — a complete digital growth system.",
  keywords: [
    "web developer",
    "conversion-focused websites",
    "Next.js developer",
    "React developer",
    "social media management",
    "video editing",
    "digital growth",
    "Genie9.dev",
  ],
  authors: [{ name: "Genie9.dev" }],
  openGraph: {
    title: "Genie9.dev — Build Websites That Bring You Clients",
    description:
      "High-performing websites, content, and digital systems for businesses that want real growth.",
    url: "https://genie9.dev",
    siteName: "Genie9.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genie9.dev — Build Websites That Bring You Clients",
    description:
      "High-performing websites, content, and digital systems for businesses that want real growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
