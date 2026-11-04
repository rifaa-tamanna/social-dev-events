// import type { Metadata } from "next";
// import { Space_Grotesk, Montserrat, Geist } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import Navbar from "@/components/home/Navbar";
// import Footer from "@/components/home/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// const spaceGrotesk = Space_Grotesk({
//   variable: "--font-space-grotesk",
//   subsets: ["latin"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Social Development Events",
//   description: "Connect, participate and make a difference.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={cn(
//         "h-full",
//         "antialiased",
//         spaceGrotesk.variable,
//         montserrat.variable,
//         "font-sans",
//         geist.variable,
//       )}
//     >
//       <body className="min-h-full flex flex-col font-paragraph">
//         <Navbar></Navbar>
//         {children}
//         <Footer></Footer>

//         <ToastContainer position="top-center" autoClose={3000} theme="dark" />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        montserrat.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col font-paragraph">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
