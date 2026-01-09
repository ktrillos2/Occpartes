import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BrandsSection } from "@/components/brands-section"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SlpCatalogSection } from "@/components/slp-catalog-section"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <SlpCatalogSection />
      <GalleryCarousel />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
