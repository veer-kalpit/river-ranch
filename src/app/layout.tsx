"use client";

import "./globals.css";
import Cursor from "@/components/cursor";
import ClickEffect from "@/components/ClickEffect";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Cursor />
          <ClickEffect />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
