"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SlpCatalogSection({ data }: { data?: any }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="bg-[#1E4B8E] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="pl-10 md:pl-16 lg:pl-24 pr-8 md:pr-12 lg:pr-16 py-12 md:py-16 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block bg-[#F7A600] text-[#1E4B8E] font-bold px-4 py-1 rounded-full text-sm mb-6 mx-auto md:mx-0">
                                    {data?.badgeText || "CATÁLOGO OFICIAL"}
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    {data?.title || "Catálogo Swedish Lorry Parts (SLP)"}
                                </h2>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    {data?.description || "Acceda al catálogo completo de repuestos de alta calidad.\nEncuentre la pieza exacta que necesita con la garantía y respaldo de SLP."}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-[#F7A600] hover:bg-[#FFBE3D] text-[#1E4B8E] font-bold text-lg h-14 px-8"
                                    >
                                        <a href={data?.catalogUrl || "https://slp.se/es"} target="_blank" rel="noopener noreferrer">
                                            {data?.buttonText || "Ver Catálogo Online"}
                                            <ExternalLink className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative h-full min-h-[300px] bg-[#2D3748] flex items-center justify-center p-8">
                            {/* Abstract decorative elements since we don't have the specific SLP image yet */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute transform rotate-45 bg-white h-full w-20 left-1/4"></div>
                                <div className="absolute transform rotate-45 bg-[#F7A600] h-full w-10 left-1/2"></div>
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="border-4 border-white/20 rounded-xl p-8 backdrop-blur-sm bg-white/5">
                                    <h3 className="text-4xl font-black text-white mb-2 tracking-wider">SLP</h3>
                                    <p className="text-[#F7A600] font-bold tracking-widest text-sm">SWEDISH LORRY PARTS</p>
                                    <div className="mt-6 text-white/80 text-sm">
                                        Calidad Sueca para su Maquinaria
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
