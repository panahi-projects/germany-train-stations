import type { Metadata } from "next";

// @ts-expect-error
import "./globals.css";
import { Container } from "./components";

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
      <body className="antialiased flex flex-col min-h-screen">
        {/* Simple Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Container>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚂</span>
                  <h1 className="text-xl font-bold text-gray-900">
                    German Train Stations
                  </h1>
                </div>
                <nav className="hidden sm:flex space-x-4 text-sm text-gray-600">
                  <span>Interactive Map</span>
                </nav>
              </div>
            </Container>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Simple Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
            <p>
              Data sourced from public train station information | Made with ❤️
              by Saeed Panahi |
              <span className="ml-2">
                Built with Next.js, Typescript & Leaflet
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
