import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
const inter = Inter({
 
  subsets: ["latin"]
});

export const metadata = {
  title: "Splitter",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className}`}
      >
        <ClerkProvider>
        <ConvexClientProvider>
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
       

         
      </body>
    </html>
  );
}
