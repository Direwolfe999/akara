import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akara Plug — Fresh Hostel Akara",
  description:
    "Order hot, fresh akara delivered to your hostel door. I greet the room! Built by Destiny — AI & Full-Stack Engineer.",
  keywords: ["akara", "hostel food", "uniben", "fresh akara", "order akara online"],
  authors: [{ name: "Destiny", url: "https://direwolfe-x.vercel.app" }],
  openGraph: {
    title: "Akara Plug — Fresh Hostel Akara",
    description:
      "Order hot, fresh akara delivered to your hostel door. I greet the room!",
    type: "website",
    siteName: "Akara Plug",
  },
  icons: {
    icon: "/favicon.svg",
  },
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