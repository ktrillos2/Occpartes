"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "573000000000" // Reemplazar con el número real
  const message = "Hola, estoy interesado en los servicios de OCC Partes. ¿Podrían ayudarme?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tooltip */}
      <motion.span
        className="hidden md:block bg-white text-[#2D3748] px-4 py-2 rounded-full shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        ¡Escríbenos por WhatsApp!
      </motion.span>

      {/* Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        <div className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:bg-[#20BA5A] transition-colors duration-300">
          <Image src="/images/whatsapp.png" alt="WhatsApp" width={40} height={40} className="w-10 h-10" />
        </div>
      </div>
    </motion.a>
  )
}
