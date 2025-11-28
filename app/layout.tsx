import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto, JetBrains_Mono } from "next/font/google"
import "../styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ranjeet Patel - Full-Stack Developer",
  description:
    "Full-Stack Developer & Junior Software Engineer from Ahmedabad, India. Building scalable, production-ready systems.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
