"use client";

import { WalletProvider } from "@/components/providers/WalletProvider";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Navbar from "@/components/ui/Navbar";  
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider value={defaultSystem}>
          <WalletProvider>
            <Navbar />  {/* ← Add this */}
            {children}
          </WalletProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}


