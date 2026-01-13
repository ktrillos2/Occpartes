import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "OCC Partes | Soluciones en Equipos Premium - Repuestos Volvo Colombia",
  description:
    "Más de 15 años de experiencia en repuestos y servicios para equipos Volvo. Distribuidores autorizados SLP en Colombia. Mantenimiento, diagnóstico y partes para maquinaria de construcción, camiones y buses.",
  keywords: [
    "repuestos volvo",
    "maquinaria pesada colombia",
    "SLP colombia",
    "mantenimiento volvo",
    "OCC Partes",
    "equipos construcción",
  ],
  generator: "v0.app",
  openGraph: {
    title: "OCC Partes | Soluciones en Equipos Premium",
    description: "Distribuidores autorizados de repuestos Volvo y SLP en Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/logo-occpartes-png.png",
        width: 1200,
        height: 630,
        alt: "OCC Partes Logo",
      },
    ],
  },
  icons: {
    icon: "/images/logo-occpartes-png.png",
    apple: "/images/logo-occpartes-png.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
