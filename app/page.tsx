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
import { client } from "@/sanity/lib/client"
import { pageQuery } from "@/lib/sanity.queries"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const data = await client.fetch(pageQuery)

  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <HeroSection data={data?.hero} />
      <AboutSection data={data?.about} />
      <ServicesSection data={data?.services} />
      <BrandsSection data={data?.brands} />
      <SlpCatalogSection data={data?.slpCatalog} />
      <GalleryCarousel data={data?.gallery} />
      <ClientsSection data={data?.clients} />
      <ContactSection data={data?.contact} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
