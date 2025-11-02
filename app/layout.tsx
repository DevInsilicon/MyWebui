import type { Metadata } from "next";
// @ts-expect-error ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "My WebUI",
  description: "A passion project web interface for local and API models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0">{children}</body>
    </html>
  );
}
