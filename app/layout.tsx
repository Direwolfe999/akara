import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akara Plug",
  description: "Fresh akara delivered to your hostel door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}