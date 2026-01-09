"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, ArrowUp, Shield, Award, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  servicios: [
    { label: "Repuestos Certificados", href: "#servicios" },
    { label: "Mantenimiento Preventivo", href: "#servicios" },
    { label: "Diagnóstico Electrónico", href: "#servicios" },
    { label: "Emergencias en Campo", href: "#servicios" },
  ],
  empresa: [
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Nuestras Marcas", href: "#marcas" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#2D3748] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center mb-6">
              <Image
                src="/images/logo-occpartes-png.png"
                alt="OCC Partes - Soluciones en Equipos Premium"
                width={160}
                height={53}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Más de 15 años brindando soluciones integrales en repuestos y servicios para maquinaria pesada Volvo en
              Colombia.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#F7A600]" />
                </div>
                <a href="mailto:occpartesvolvo@gmail.com" className="hover:text-[#F7A600] transition-colors">
                  occpartesvolvo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#F7A600]" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:3218644235" className="hover:text-[#F7A600] transition-colors">
                    321 864 4235
                  </a>
                  <a href="tel:3166909756" className="hover:text-[#F7A600] transition-colors">
                    316 690 9756
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-[#F7A600] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-[#F7A600] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="h-5 w-5 text-[#F7A600] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/90 font-medium">Yumbo, Valle del Cauca</p>
                <p className="text-white/60 text-sm">Colombia</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F7A600] to-[#FFBE3D] rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#2D3748]" />
                <div>
                  <p className="font-bold text-[#2D3748] text-sm">Distribuidores Autorizados</p>
                  <p className="text-[#2D3748]/80 text-xs font-medium">SLP - Swedish Lorry Parts</p>
                </div>
              </div>
              <div className="border-t border-[#2D3748]/20 pt-3 space-y-2">
                <div className="flex items-center gap-2 text-[#2D3748]">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">24 meses de garantía</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D3748]">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">Origen Sueco certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} OCC Partes SAS. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-xs mt-1">Desarrollado por K&T 🤍</p>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-[#F7A600] transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Volver arriba
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
