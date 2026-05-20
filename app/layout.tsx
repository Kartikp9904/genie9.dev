import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genie9.dev"),
  title: "Genie9.dev — Website Development & Automation Agency in Ahmedabad",
  description:
    "Genie9.dev is a professional website development and business automation agency based in Ahmedabad, Gujarat. We build fast Next.js websites and custom CRM/WhatsApp API automations that help businesses grow.",
  keywords: [
    "website development agency ahmedabad",
    "web design company ahmedabad",
    "automation agency ahmedabad",
    "whatsapp api integration india",
    "crm workflow automation gujarat",
    "Next.js developer ahmedabad",
    "business lead generation websites",
    "Genie9.dev",
  ],
  authors: [{ name: "Genie9.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Genie9.dev — Website Development & Automation Agency in Ahmedabad",
    description:
      "High-performing websites and business automation systems designed to increase leads and save manual time.",
    url: "https://genie9.dev",
    siteName: "Genie9.dev",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genie9.dev — Website Development & Automation Agency in Ahmedabad",
    description:
      "High-performing websites and business automation systems designed to increase leads and save manual time.",
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
    telephone: "+919898083823",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Satellite",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0225,
      longitude: 72.5714,
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
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.instagram.com/genie9.dev/",
      "https://linkedin.com/in/genie9dev",
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
