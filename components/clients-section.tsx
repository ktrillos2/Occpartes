"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const clients = [
  { name: "Siderúrgica de Occidente – SIDOC", location: "Acopi-Valle" },
  { name: "Agregados Y Mezclas Cachibi", location: "Acopi-Valle" },
  { name: "Cesconstrucciones", location: "Cali-Valle" },
  { name: "Obcipol", location: "Bogotá" },
  { name: "Amezquita Naranjo", location: "Jamundí-Valle" },
  { name: "Ingeinco", location: "Villavicencio-Meta" },
  { name: "Mercovil", location: "Acopi-Valle" },
  { name: "Maquinaria Zwein", location: "Florida-Valle" },
]

export function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clientes" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7A600] font-semibold text-sm uppercase tracking-wider">Nuestros Clientes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mt-2 mb-4">
            Clientes que <span className="text-[#1E4B8E]">Confían</span> en Nosotros
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            Empresas líderes del sector industrial en Colombia han elegido a OCC Partes como su aliado estratégico para
            el mantenimiento y suministro de repuestos de su maquinaria pesada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Clients Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-[#F7F9FC] rounded-xl p-5 flex items-start gap-3 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-[#F7A600]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              >
                <CheckCircle2 className="h-6 w-6 text-[#F7A600] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D3748]">{client.name}</p>
                  <span className="flex items-center gap-1 text-[#718096] text-sm mt-1">
                    <MapPin className="h-3 w-3" />
                    {client.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/fmx.jpg"
                alt="Camión Volvo FMX Max"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">Volvo FMX Max</p>
                <p className="text-white/80 text-sm">Potencia y rendimiento excepcional</p>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#F7A600] text-[#2D3748] p-6 rounded-xl shadow-xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="font-extrabold text-4xl">8+</p>
              <p className="font-medium text-sm">Empresas aliadas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
