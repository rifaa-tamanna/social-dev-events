import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// Space Grotesk is the only typeface used across the whole app.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Development Events",
  description: "Connect, participate and make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", spaceGrotesk.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-paragraph">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
