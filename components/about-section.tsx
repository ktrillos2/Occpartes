"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.image"

const features = [
  "Cubrimos el 100% del suministro de partes para equipos Volvo",
  "Distribuidores autorizados de SLP (Swedish Lorry Parts)",
  "Partes alternativas de origen sueco con 24 meses de garantía",
  "Infraestructura de 1.200 m² para atención de equipos",
  "Equipo técnico con más de 20 años de experiencia",
]

const galleryImages = [
  {
    src: "/images/excavadora-204.jpg",
    alt: "Excavadora Volvo EC220 en cantera",
  },
  {
    src: "/images/excavadora-205.jpg",
    alt: "Volvo L25 Electric - Tecnología Premium",
  },
  {
    src: "/images/screenshot-20180903-125506-2.png",
    alt: "Excavadora Volvo excavando rocas",
  },
  {
    src: "/images/volvo-201.jpg",
    alt: "Volvo A45G Articulado en terreno",
  },
]

export function AboutSection({ data }: { data?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featureList = data?.features || features
  const title = data?.title || "Expertos en Soluciones para"
  const titleHighlight = data?.titleHighlight || "Equipos Premium"
  const description = data?.description || "Somos un grupo humano con más de 15 años de experiencia en la marca Volvo, ofreciendo productos post venta en los segmentos de equipo de construcción, camiones y buses, motores estacionarios y marinos Volvo Penta."
  const gallery = data?.galleryImages || galleryImages

  const getImgSrc = (item: any, index: number) => {
    if (item?.image?.asset?._ref) return urlFor(item.image)?.url() || galleryImages[index].src
    return item.src || galleryImages[index].src
  }

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">{data?.sectionBadge || "Quiénes Somos"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mt-2 mb-4">
            {title} <span className="text-[#1E4B8E]">{titleHighlight}</span>
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getImgSrc(gallery[0], 0)}
                    alt={gallery[0].alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {gallery[0].caption || "Excavadora EC220"}
                  </span>
                </motion.div>
                <motion.div
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getImgSrc(gallery[1], 1)}
                    alt={gallery[1].alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {gallery[1].caption || "L25 Electric"}
                  </span>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getImgSrc(gallery[2], 2)}
                    alt={gallery[2].alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {gallery[2].caption || "Excavación Pesada"}
                  </span>
                </motion.div>
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getImgSrc(gallery[3], 3)}
                    alt={gallery[3].alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {gallery[3].caption || "Articulado A45G"}
                  </span>
                </motion.div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 bg-[#F7A600]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[#4A5568] leading-relaxed mb-8 text-lg">
              {data?.experienceDescription || (
                <>
                  Como Distribuidores Autorizados de SLP (Swedish Lorry Parts), garantizamos partes alternativas de origen
                  sueco con <strong className="text-[#1E4B8E]">24 meses de garantía</strong>. Nuestra filosofía se basa en
                  compromiso técnico, respuesta oportuna y soluciones confiables que maximizan la productividad de su
                  equipo.
                </>
              )}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {featureList.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-xl hover:bg-[#1E4B8E]/5 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-[#F7A600] flex-shrink-0" />
                  <span className="text-[#2D3748] font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
