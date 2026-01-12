"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"

import { urlFor } from "@/lib/sanity.image"

const brandCategories = [
  {
    id: "volvo",
    name: "Familia Volvo",
    description: "Especialistas certificados en toda la línea Volvo",
    brands: ["Volvo Construction Equipment", "Volvo Trucks", "Volvo Penta", "Volvo Buses"],
    color: "#1E4B8E",
    featured: true,
  },
  {
    id: "partners",
    name: "Marcas Asociadas",
    description: "Partners oficiales de las mejores marcas del sector",
    brands: ["Donaldson", "Berco", "Meritor", "Bosch", "Rexroth", "SLP"],
    color: "#F7A600",
    featured: false,
  },
  {
    id: "diagnostic",
    name: "Diagnóstico Especializado",
    description: "Herramientas avanzadas para múltiples marcas",
    brands: ["CASE Construction", "Kobelco", "New Holland"],
    color: "#2D3748",
    featured: false,
  },
  {
    id: "others",
    name: "Otras Marcas Atendidas",
    description: "Amplia cobertura en el sector industrial",
    brands: [
      "Wacker Neuson",
      "Bobcat",
      "JCB",
      "Scandia",
      "Trelleborg OTR",
      "Zoomlion",
      "CASE",
      "Hyundai",
      "SDLG",
      "Caterpillar",
      "Sennebogen",
      "Kobelco",
    ],
    color: "#718096",
    featured: false,
  },
]

export function BrandsSection({ data }: { data?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("volvo")

  const categories = data?.categories || brandCategories
  const activeData = categories.find((cat: any) => cat.id === activeCategory)
  const promoCard = data?.promoCard

  return (
    <section id="marcas" className="py-20 md:py-28 bg-[#F7F9FC]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">{data?.sectionBadge || "Nuestras Marcas"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mt-2 mb-4">
            {data?.title || "Aliados de las"} <span className="text-[#1E4B8E]">{data?.titleHighlight || "Mejores Marcas"}</span>
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            {data?.description || "Trabajamos con las marcas líderes del sector industrial para garantizar la máxima calidad en repuestos y servicios."}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category: any) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                ? "bg-[#1E4B8E] text-white shadow-lg scale-105"
                : "bg-white text-[#4A5568] hover:bg-[#1E4B8E]/10 hover:text-[#1E4B8E]"
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2D3748] mb-2">{activeData?.name}</h3>
              <p className="text-[#4A5568]">{activeData?.description}</p>
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mt-4 md:mt-0"
              style={{ backgroundColor: `${activeData?.color}20` }}
            >
              <ExternalLink className="h-7 w-7" style={{ color: activeData?.color }} />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeData?.brands.map((brand: string, index: number) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-[#F7F9FC] rounded-xl p-6 text-center hover:bg-[#1E4B8E] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7A600]/0 to-[#F7A600]/0 group-hover:from-[#F7A600]/10 group-hover:to-transparent transition-all duration-300" />
                <p className="relative font-semibold text-[#2D3748] group-hover:text-white transition-colors duration-300">
                  {brand}
                </p>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-transparent group-hover:text-white/60 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 relative rounded-2xl overflow-hidden h-64 md:h-80"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={promoCard?.image?.asset?._ref ? urlFor(promoCard.image)!.url() : "/images/image.png"}
            alt={promoCard?.title || "Brochure OCC Partes"}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4B8E]/90 via-[#1E4B8E]/60 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{promoCard?.title || "100% Cobertura en Repuestos Volvo"}</h3>
              <p className="text-white/90 mb-4">{promoCard?.text || "Partes originales y alternativas con garantía SLP de 24 meses."}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#F7A600] text-[#2D3748] font-bold px-6 py-3 rounded-full hover:bg-[#FFBE3D] transition-colors"
              >
                {promoCard?.buttonText || "Consultar Disponibilidad"}
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
