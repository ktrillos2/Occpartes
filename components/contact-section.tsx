"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, Clock, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

import { urlFor } from "@/lib/sanity.image"

const iconMap: Record<string, any> = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
}

const contactInfo = [
  {
    icon: 'mail',
    label: "Email",
    value: "occpartesvolvo@gmail.com",
    href: "mailto:occpartesvolvo@gmail.com",
  },
  {
    icon: 'phone',
    label: "Celular",
    value: "321 864 4235 - 316 690 9756",
    href: "tel:3218644235",
  },
  {
    icon: 'mapPin',
    label: "Ubicación",
    value: "Yumbo, Valle del Cauca, Colombia",
    href: "#",
  },
  {
    icon: 'clock',
    label: "Horario",
    value: "Lun - Vie: 8:00 AM - 6:00 PM",
    href: "#",
  },
]

const philosophy = [
  "Compromiso técnico",
  "Respuesta oportuna",
  "Calidad en el servicio",
  "Relaciones de largo plazo",
]

export function ContactSection({ data }: { data?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const info = data?.info || contactInfo
  const philosophyList = data?.philosophy || philosophy
  const bottomImages = data?.bottomImages || [
    { src: "/images/volvo-203.jpg", caption: "Camiones Mineros" },
    { src: "/images/screenshot-20180629-133933-2.png", caption: "Equipo de Construcción" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const getImgSrc = (img: any, index: number) => {
    if (img?.image?.asset?._ref) return urlFor(img.image)?.url() || bottomImages[index].src
    return img.src || bottomImages[index].src
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F7F9FC]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">{data?.sectionBadge || "Contáctenos"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mt-2 mb-4">
            {data?.title || "¿Listo para"} <span className="text-[#1E4B8E]">{data?.titleHighlight || "Optimizar"}</span> {data?.titleSuffix || "su Operación?"}
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            {data?.description || "Solicite una cotización o consulte sobre nuestros servicios. Nuestro equipo está listo para atenderle."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#1E4B8E] rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">{data?.infoTitle || "Información de Contacto"}</h3>
              <p className="text-white/80 mb-8">
                {data?.infoDescription || "Estamos disponibles para responder sus consultas y brindarle la mejor solución para su maquinaria."}
              </p>

              <div className="space-y-6 mb-10">
                {info.map((item: any, index: number) => {
                  const Icon = iconMap[item.icon] || Mail
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7A600] transition-colors duration-300">
                        <Icon className="h-5 w-5 text-[#F7A600] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{item.label}</p>
                        <p className="font-semibold group-hover:text-[#F7A600] transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Philosophy */}
              <div className="border-t border-white/20 pt-8">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#F7A600]" />
                  {data?.philosophyTitle || "Nuestra Filosofía"}
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  {philosophyList.map((item: string, idx: number) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Solicitar Cotización</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">Nombre Completo *</label>
                    <Input
                      type="text"
                      placeholder="Su nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#F7F9FC] border-[#E2E8F0] focus:border-[#1E4B8E] focus:ring-[#1E4B8E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">Correo Electrónico *</label>
                    <Input
                      type="email"
                      placeholder="correo@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#F7F9FC] border-[#E2E8F0] focus:border-[#1E4B8E] focus:ring-[#1E4B8E]"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#F7F9FC] border-[#E2E8F0] focus:border-[#1E4B8E] focus:ring-[#1E4B8E]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A5568] mb-2">Empresa</label>
                    <Input
                      type="text"
                      placeholder="Nombre de su empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[#F7F9FC] border-[#E2E8F0] focus:border-[#1E4B8E] focus:ring-[#1E4B8E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A5568] mb-2">Mensaje *</label>
                  <Textarea
                    placeholder="Describa los repuestos o servicios que necesita..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#F7F9FC] border-[#E2E8F0] focus:border-[#1E4B8E] focus:ring-[#1E4B8E] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F7A600] hover:bg-[#FFBE3D] text-[#2D3748] font-bold text-lg py-6 group"
                >
                  Enviar Solicitud
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {bottomImages.map((img: any, idx: number) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden h-64">
              <Image src={getImgSrc(img, idx) || "/placeholder.svg"} alt={img.caption || ""} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
