"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "occpartes1@gmail.com",
    href: "mailto:occpartes1@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cali, Valle del Cauca, Colombia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 8:00 AM - 6:00 PM",
    href: "#",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
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
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">Contáctenos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mt-2 mb-4">
            ¿Listo para <span className="text-[#1E4B8E]">Optimizar</span> su Operación?
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            Solicite una cotización o consulte sobre nuestros servicios. Nuestro equipo está listo para atenderle.
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
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <p className="text-white/80 mb-8">
                Estamos disponibles para responder sus consultas y brindarle la mejor solución para su maquinaria.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7A600] transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-[#F7A600] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="font-semibold group-hover:text-[#F7A600] transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Philosophy */}
              <div className="border-t border-white/20 pt-8">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#F7A600]" />
                  Nuestra Filosofía
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Compromiso técnico</li>
                  <li>• Respuesta oportuna</li>
                  <li>• Calidad en el servicio</li>
                  <li>• Relaciones de largo plazo</li>
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
          <div className="relative rounded-2xl overflow-hidden h-64">
            <Image src="/images/volvo-203.jpg" alt="Camión minero Volvo" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Camiones Mineros</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-64">
            <Image
              src="/images/screenshot-20180629-133933-2.png"
              alt="Excavadora Volvo en operación"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Equipo de Construcción</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
