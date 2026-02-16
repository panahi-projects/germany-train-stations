import type { Metadata } from "next";

// @ts-expect-error
import "./globals.css";

export const metadata: Metadata = {
  title: "German Train Stations",
  description: "Explore train stations across Germany on an interactive map",
  keywords: [
    "train stations",
    "Germany",
    "railway",
    "map",
    "Deutsche Bahn",
    "public transportation",
    "PANTohealth",
  ],
  authors: [{ name: "Saeed Panahi" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
  openGraph: {
    title: "German Train Stations",
    description: "Explore train stations across Germany on an interactive map",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
