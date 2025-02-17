import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import type React from "react" // Added import for React
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Project - Architecture",
  description: "Digital Project Architecture Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className={inter.className}>
          <Header />
            {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}

