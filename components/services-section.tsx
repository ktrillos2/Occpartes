"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import {
  IconCertifiedParts,
  IconMaintenance,
  IconDiagnostics,
  IconEmergency,
  IconReports,
  IconLogistics,
} from "@/components/ui/custom-icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    icon: IconCertifiedParts,
    title: "Repuestos Certificados",
    description: "Suministro de repuestos originales y alternativos certificados SLP con 24 meses de garantía.",
    highlight: "24 meses garantía",
  },
  {
    icon: IconMaintenance,
    title: "Mantenimiento Preventivo y Correctivo",
    description: "Servicio con filtración original, siguiendo rutinas técnicas y protocolos según el fabricante Volvo.",
    highlight: "Protocolos Volvo",
  },
  {
    icon: IconDiagnostics,
    title: "Diagnóstico Electrónico Avanzado",
    description:
      "Herramientas Nexiq especializadas para diagnóstico de equipos CASE Construction, Volvo, Kobelco y New Holland.",
    highlight: "Tecnología Nexiq",
  },
  {
    icon: IconEmergency,
    title: "Emergencias en Campo",
    description: "Atención de emergencias operativas directamente en su ubicación con respuesta oportuna.",
    highlight: "Respuesta inmediata",
  },
  {
    icon: IconReports,
    title: "Reportes Técnicos",
    description: "Plataforma Meknit para acompañamiento y trazabilidad en reportes técnicos de servicios ejecutados.",
    highlight: "Plataforma Meknit",
  },
  {
    icon: IconLogistics,
    title: "Logística Eficiente",
    description: "Inventarios de seguridad local e importaciones con tiempos de entrega de 7 días.",
    highlight: "Entrega en 7 días",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#1E4B8E] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/screenshot-20180629-133933-2.png" alt="" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Soluciones Integrales para su <span className="text-[#F7A600]">Operación</span>
          </h2>
          <p className="text-white/80 leading-relaxed">
            OCC Partes Volvo SAS ofrece soluciones completas para mantener su maquinaria operando al máximo rendimiento
            con calidad y compromiso técnico.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-[#F7A600] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] mb-3">{service.title}</h3>
              <p className="text-[#4A5568] leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-sm font-bold text-[#1E4B8E] bg-[#1E4B8E]/10 px-3 py-1 rounded-full">
                {service.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-[#F7A600] hover:bg-[#FFBE3D] text-[#2D3748] font-bold px-8 group">
            <a href="#contacto">
              Solicitar Servicio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
