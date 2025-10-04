import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Success Leadership Simulation",
  description: "30-Day intensive CS leadership program dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
