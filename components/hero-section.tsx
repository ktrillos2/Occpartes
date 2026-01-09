"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    image: "/images/volvo-203.jpg",
    title: "Volvo R100E",
    subtitle: "Camiones Mineros",
  },
  {
    image: "/images/volvo-201.jpg",
    title: "Volvo A45G",
    subtitle: "Articulados",
  },
  {
    image: "/images/screenshot-20180903-125506-2.png",
    title: "Volvo EC380E",
    subtitle: "Excavadoras",
  },
  {
    image: "/images/fmx.jpg",
    title: "Volvo FMX",
    subtitle: "Camiones de Obra",
  },
]

const serviceHighlights = [
  { number: "01", title: "Repuestos Originales", desc: "Partes certificadas SLP con 24 meses de garantía" },
  { number: "02", title: "Servicio Técnico", desc: "Diagnóstico avanzado con herramientas Nexiq" },
  { number: "03", title: "Logística Express", desc: "Entrega en 7 días con inventario local" },
  { number: "04", title: "Emergencias 24/7", desc: "Soporte en campo para tu operación" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#0A1628]">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[currentSlide].image || "/placeholder.svg"}
            alt={heroSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-20">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-3 bg-[#F7A600] text-[#0A1628] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#0A1628] rounded-full animate-pulse" />
                Distribuidores Autorizados SLP en Colombia
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1]">
                <span className="block">Repuestos y Servicio</span>
                <span className="block text-[#F7A600]">Especializado</span>
                <span className="block text-white/90">para Equipos Volvo</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Más de 15 años de experiencia en maquinaria de construcción, camiones, buses y equipos marinos. Cubrimos
              el 100% del suministro de partes Volvo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#F7A600] hover:bg-[#FFBE3D] text-[#0A1628] font-bold text-base px-8 py-6 rounded-sm shadow-[0_0_40px_rgba(247,166,0,0.3)] hover:shadow-[0_0_60px_rgba(247,166,0,0.5)] transition-all duration-500 group"
              >
                <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A1628] font-bold text-base px-8 py-6 rounded-sm bg-[#0A1628]/80 transition-all duration-300"
              >
                <a href="#servicios">Explorar Servicios</a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Service Highlights - 5 columns */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-5 rounded-sm cursor-pointer transition-all duration-500 ${
                    hoveredService === index
                      ? "bg-[#F7A600] shadow-[0_0_30px_rgba(247,166,0,0.3)]"
                      : "bg-white/5 backdrop-blur-sm hover:bg-white/10"
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-3xl font-black transition-colors duration-300 ${
                        hoveredService === index ? "text-[#0A1628]" : "text-[#F7A600]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          hoveredService === index ? "text-[#0A1628]" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          hoveredService === index ? "text-[#0A1628]/80" : "text-white/60"
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 transform transition-all duration-300 ${
                        hoveredService === index
                          ? "text-[#0A1628] translate-x-1 opacity-100"
                          : "text-white/30 opacity-0"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Controls & Info - Moved to bottom of content area since marquee was removed */}
        <div className="absolute bottom-8 left-4 right-4 lg:left-auto lg:right-8 flex items-center gap-6">
          {/* Current Slide Info */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block"
          >
            <p className="text-white/50 text-sm uppercase tracking-wider">{heroSlides[currentSlide].subtitle}</p>
            <p className="text-white font-bold text-xl">{heroSlides[currentSlide].title}</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-sm bg-[#1E4B8E]/60 flex items-center justify-center text-white hover:bg-[#F7A600] hover:text-[#0A1628] transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-sm bg-[#1E4B8E]/60 flex items-center justify-center text-white hover:bg-[#F7A600] hover:text-[#0A1628] transition-all duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide ? "w-8 bg-[#F7A600]" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F7A600]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#1E4B8E]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
