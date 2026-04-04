import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genie9.dev"),
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
  alternates: {
    canonical: "/",
  },
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
  icons: {
    icon: [{ url: "/assets/favicon.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Genie9.dev",
    image: "https://genie9.dev/assets/logo.png",
    "@id": "https://genie9.dev",
    url: "https://genie9.dev",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressCountry: "International",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.instagram.com/genie9.dev/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#080810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
