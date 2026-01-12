"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

import { urlFor } from "@/lib/sanity.image"

const galleryImages = [
  {
    src: "/images/volvo-203.jpg",
    alt: "Volvo R100E Rigid Hauler nocturno",
    title: "R100E Rigid Hauler",
    description: "Máxima capacidad para operaciones mineras",
  },
  {
    src: "/images/volvo-202.jpeg",
    alt: "Volvo A40D y L350F en cantera",
    title: "Articulado A40D + Cargador L350F",
    description: "Trabajo en equipo para máxima productividad",
  },
  {
    src: "/images/volvo-20truck-202.jpg",
    alt: "Volvo FMX Dump Truck verde",
    title: "FMX Dump Truck",
    description: "Robustez y eficiencia en cada carga",
  },
  {
    src: "/images/screenshot-20180618-053650-2.png",
    alt: "Cargadores Volvo L20H y L350H",
    title: "Cargadores L20H & L350H",
    description: "Del compacto al gigante, tenemos tu solución",
  },
  {
    src: "/images/fmx-202.jpg",
    alt: "Volvo FMX en construcción urbana",
    title: "FMX en Acción Urbana",
    description: "Versatilidad para cualquier proyecto",
  },
]

export function GalleryCarousel({ data }: { data?: any }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = data?.images || galleryImages

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isPlaying || !images.length) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide, images.length])

  const getImgSrc = (image: any, index: number) => {
    if (image?.image?.asset?._ref) return urlFor(image.image)?.url() || images[index].src
    return image.src || images[index].src
  }

  return (
    <section className="py-20 md:py-28 bg-[#1E4B8E]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">{data?.sectionBadge || "Nuestra Flota"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            {data?.title || "Galería de"} <span className="text-[#F7A600]">{data?.titleHighlight || "Equipos Premium"}</span>
          </h2>
          <p className="text-white/80 leading-relaxed">
            {data?.description || "Conoce la variedad de maquinaria Volvo que atendemos y mantenemos para nuestros clientes en toda Colombia."}
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={getImgSrc(images[currentIndex], currentIndex) || "/placeholder.svg"}
                  alt={images[currentIndex]?.alt || images[currentIndex]?.title || ""}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">
                    {images[currentIndex]?.title}
                  </h3>
                  <p className="text-white/80 text-lg">{images[currentIndex]?.description}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Controls and Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {/* Play/Pause */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#F7A600] w-8" : "bg-white/40 hover:bg-white/60"
                    }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="text-white/80 font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </motion.div>

        {/* Thumbnail Preview */}
        <motion.div
          className="flex justify-center gap-3 mt-8 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {images.map((image: any, index: number) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${index === currentIndex
                  ? "ring-2 ring-[#F7A600] ring-offset-2 ring-offset-[#1E4B8E] scale-105"
                  : "opacity-60 hover:opacity-100"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={getImgSrc(image, index) || "/placeholder.svg"} alt={image.alt || ""} fill className="object-cover" />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
