import type { Metadata } from "next";
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
        <header className="border-b border-text-secondary-50">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <Container>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl opacity-80">🚂</span>
                  <h1 className="text-sm font-medium text-text-primary tracking-wide">
                    GERMAN TRAIN STATIONS
                  </h1>
                </div>
                <nav className="hidden sm:flex">
                  <span className="text-xs text-text-primary">
                    Interactive Map
                  </span>
                </nav>
              </div>
            </Container>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Simple Footer */}
        <footer className="border-t border-text-primary-50 py-3">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-text-primary/40">
              Data sourced from public train station information • Made with ❤️
              by Saeed Panahi
            </p>
            <p className="text-[10px] text-text-primary mt-1">
              Next.js • TypeScript • Leaflet
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
