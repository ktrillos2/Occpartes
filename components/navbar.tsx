"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1E4B8E] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:occpartesvolvo@gmail.com"
              className="flex items-center gap-2 hover:text-[#F7A600] transition-colors"
            >
              <Mail className="h-4 w-4" />
              occpartesvolvo@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Cali, Valle del Cauca, Colombia
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#F7A600] font-semibold">Distribuidores Autorizados SLP</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="#inicio" className="flex items-center">
              <Image
                src="/images/logo-occpartes-png.png"
                alt="OCC Partes - Soluciones en Equipos Premium"
                width={180}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#2D3748] font-medium hover:text-[#1E4B8E] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F7A600] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-[#F7A600] hover:bg-[#FFBE3D] text-[#2D3748] font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#contacto">Cotizar Ahora</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#2D3748]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#2D3748] font-medium py-2 hover:text-[#1E4B8E] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-[#F7A600] hover:bg-[#FFBE3D] text-[#2D3748] font-semibold mt-4">
                  <a href="#contacto" onClick={() => setIsOpen(false)}>
                    Cotizar Ahora
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
