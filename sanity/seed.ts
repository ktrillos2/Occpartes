import { getCliClient } from 'sanity/cli'
import path from 'path'
import fs from 'fs'

const client = getCliClient({ apiVersion: '2024-01-01' })

async function seed() {
    console.log('🌱 Starting full seed with ALL Occpartes sections...')

    // Helper function to upload image safely
    async function uploadImage(imagePath: string, filename: string) {
        if (fs.existsSync(imagePath)) {
            try {
                const buffer = fs.readFileSync(imagePath)
                const asset = await client.assets.upload('image', buffer, { filename })
                console.log(`✅ Uploaded ${filename}`)
                return asset._id
            } catch (e) {
                console.error(`❌ Failed to upload ${filename}:`, e)
                return null
            }
        }
        console.warn(`⚠️ Image not found: ${imagePath}`)
        return null
    }

    // 1. Upload Assets
    const publicDir = path.join(process.cwd(), 'public')
    const imagesDir = path.join(publicDir, 'images')

    const assets = {
        logo: await uploadImage(path.join(imagesDir, 'logo-occpartes-png.png'), 'logo.png'),
        hero1: await uploadImage(path.join(imagesDir, 'volvo-203.jpg'), 'volvo-r100e.jpg'),
        hero2: await uploadImage(path.join(imagesDir, 'volvo-201.jpg'), 'volvo-a45g.jpg'),
        hero3: await uploadImage(path.join(imagesDir, 'screenshot-20180903-125506-2.png'), 'volvo-ec380e.jpg'),
        hero4: await uploadImage(path.join(imagesDir, 'fmx.jpg'), 'volvo-fmx.jpg'),
        promo: await uploadImage(path.join(imagesDir, 'image.png'), 'promo-brochure.png'),
        about1: await uploadImage(path.join(imagesDir, 'excavadora-204.jpg'), 'excavadora-204.jpg'),
        about2: await uploadImage(path.join(imagesDir, 'excavadora-205.jpg'), 'excavadora-205.jpg'),
        gallery1: await uploadImage(path.join(imagesDir, 'volvo-202.jpeg'), 'volvo-202.jpg'),
        gallery2: await uploadImage(path.join(imagesDir, 'volvo-20truck-202.jpg'), 'volvo-truck-2.jpg'),
        gallery3: await uploadImage(path.join(imagesDir, 'screenshot-20180618-053650-2.png'), 'screenshot-1.png'),
        gallery4: await uploadImage(path.join(imagesDir, 'fmx-202.jpg'), 'fmx-2.jpg'),
        contact1: await uploadImage(path.join(imagesDir, 'screenshot-20180629-133933-2.png'), 'construction-team.png'),
    }

    // --- SECTIONS ---

    // 1. Hero
    const heroDoc = {
        _id: 'hero',
        _type: 'hero',
        badgeText: 'Distribuidores Autorizados SLP en Colombia',
        headline: {
            line1: 'Repuestos y Servicio',
            line2: 'Especializado',
            line3: 'para Equipos Volvo'
        },
        description: 'Más de 15 años de experiencia en maquinaria de construcción, camiones, buses y equipos marinos. Cubrimos el 100% del suministro de partes Volvo.',
        slides: [
            { _key: '1', title: 'Volvo R100E', subtitle: 'Camiones Mineros', image: assets.hero1 ? { _type: 'image', asset: { _ref: assets.hero1 } } : undefined },
            { _key: '2', title: 'Volvo A45G', subtitle: 'Articulados', image: assets.hero2 ? { _type: 'image', asset: { _ref: assets.hero2 } } : undefined },
            { _key: '3', title: 'Volvo EC380E', subtitle: 'Excavadoras', image: assets.hero3 ? { _type: 'image', asset: { _ref: assets.hero3 } } : undefined },
            { _key: '4', title: 'Volvo FMX', subtitle: 'Camiones de Obra', image: assets.hero4 ? { _type: 'image', asset: { _ref: assets.hero4 } } : undefined },
        ],
        primaryCta: { text: 'Solicitar Cotización', url: 'https://wa.me/573218644235' },
        secondaryCta: { text: 'Explorar Servicios', url: '#servicios' }
    }

    // 2. About
    const aboutDoc = {
        _id: 'about',
        _type: 'about',
        sectionBadge: 'Quiénes Somos',
        title: 'Expertos en Soluciones para',
        titleHighlight: 'Equipos Premium',
        description: 'Somos un grupo humano con más de 15 años de experiencia en la marca Volvo, ofreciendo productos post venta en los segmentos de equipo de construcción, camiones y buses, motores estacionarios y marinos Volvo Penta.',
        features: [
            "Cubrimos el 100% del suministro de partes para equipos Volvo",
            "Distribuidores autorizados de SLP (Swedish Lorry Parts)",
            "Partes alternativas de origen sueco con 24 meses de garantía",
            "Infraestructura de 1.200 m² para atención de equipos",
            "Equipo técnico con más de 20 años de experiencia",
        ],
        experienceTitle: 'Distribuidores Autorizados de SLP',
        experienceDescription: 'Como Distribuidores Autorizados de SLP (Swedish Lorry Parts), garantizamos partes alternativas de origen sueco con 24 meses de garantía. Nuestra filosofía se basa en compromiso técnico, respuesta oportuna y soluciones confiables que maximizan la productividad de su equipo.',
        galleryImages: [
            { _key: '1', image: assets.about1 ? { _type: 'image', asset: { _ref: assets.about1 } } : undefined, alt: 'Excavadora Volvo EC220', caption: 'Excavadora EC220' },
            { _key: '2', image: assets.about2 ? { _type: 'image', asset: { _ref: assets.about2 } } : undefined, alt: 'Volvo L25 Electric', caption: 'L25 Electric' },
            { _key: '3', image: assets.hero3 ? { _type: 'image', asset: { _ref: assets.hero3 } } : undefined, alt: 'Excavación Pesada', caption: 'Excavación Pesada' },
            { _key: '4', image: assets.hero2 ? { _type: 'image', asset: { _ref: assets.hero2 } } : undefined, alt: 'Articulado A45G', caption: 'Articulado A45G' },
        ]
    }

    // 3. Services
    const servicesDoc = {
        _id: 'services',
        _type: 'services',
        sectionBadge: 'Nuestros Servicios',
        title: 'Soluciones Integrales para su',
        titleHighlight: 'Operación',
        description: 'OCC Partes Volvo SAS ofrece soluciones completas para mantener su maquinaria operando al máximo rendimiento con calidad y compromiso técnico.',
        servicesList: [
            { _key: '1', icon: 'certified', title: "Repuestos Certificados", description: "Suministro de repuestos originales y alternativos certificados SLP con 24 meses de garantía.", highlight: "24 meses garantía" },
            { _key: '2', icon: 'maintenance', title: "Mantenimiento Preventivo y Correctivo", description: "Servicio con filtración original, siguiendo rutinas técnicas y protocolos según el fabricante Volvo.", highlight: "Protocolos Volvo" },
            { _key: '3', icon: 'diagnostics', title: "Diagnóstico Electrónico Avanzado", description: "Herramientas VCADS Pro herramienta diagnóstico volvo y CNH DPA 5 para equipos CASE, New Holland, Kobelco.", highlight: "Herramienta de diagnostico" },
            { _key: '4', icon: 'emergency', title: "Emergencias en Campo", description: "Atención de emergencias operativas directamente en su ubicación con respuesta oportuna.", highlight: "Respuesta inmediata" },
            { _key: '5', icon: 'reports', title: "Reportes Técnicos", description: "Plataforma Meknit para acompañamiento y trazabilidad en reportes técnicos de servicios ejecutados.", highlight: "Plataforma Meknit" },
            { _key: '6', icon: 'logistics', title: "Logística Eficiente", description: "Inventarios de seguridad local e importaciones con tiempos de entrega de 7 días.", highlight: "Entrega en 7 días" }
        ],
        ctaText: 'Solicitar Servicio'
    }

    // 4. Brands
    const brandsDoc = {
        _id: 'brands',
        _type: 'brands',
        sectionBadge: 'Nuestras Marcas',
        title: 'Aliados de las',
        titleHighlight: 'Mejores Marcas',
        description: 'Trabajamos con las marcas líderes del sector industrial para garantizar la máxima calidad en repuestos y servicios.',
        categories: [
            {
                _key: 'volvo',
                id: "volvo",
                name: "Familia Volvo",
                description: "Especialistas certificados en toda la línea Volvo",
                brands: ["Volvo Construction Equipment", "Volvo Trucks", "Volvo Penta", "Volvo Buses"],
                color: "#1E4B8E"
            },
            {
                _key: 'partners',
                id: "partners",
                name: "Marcas Asociadas",
                description: "Partners oficiales de las mejores marcas del sector",
                brands: ["Donaldson", "Berco", "Meritor", "Bosch", "Rexroth", "SLP"],
                color: "#F7A600"
            },
            {
                _key: 'diagnostic',
                id: "diagnostic",
                name: "Diagnóstico Especializado",
                description: "Herramientas avanzadas para múltiples marcas",
                brands: ["CASE Construction", "Kobelco", "New Holland"],
                color: "#2D3748"
            },
            {
                _key: 'others',
                id: "others",
                name: "Otras Marcas Atendidas",
                description: "Amplia cobertura en el sector industrial",
                brands: ["Wacker Neuson", "Bobcat", "JCB", "Scandia", "Trelleborg OTR", "Zoomlion", "CASE", "Hyundai", "SDLG", "Caterpillar", "Sennebogen", "Kobelco"],
                color: "#718096"
            }
        ],
        promoCard: {
            image: assets.promo ? { _type: 'image', asset: { _ref: assets.promo } } : undefined,
            title: '100% Cobertura en Repuestos Volvo',
            text: 'Partes originales y alternativas con garantía SLP de 24 meses.',
            buttonText: 'Consultar Disponibilidad'
        }
    }

    // 5. SLP Catalog
    const slpCatalogDoc = {
        _id: 'slpCatalog',
        _type: 'slpCatalog',
        badgeText: 'CATÁLOGO OFICIAL',
        title: 'Catálogo Swedish Lorry Parts (SLP)',
        description: 'Acceda al catálogo completo de repuestos de alta calidad.\nEncuentre la pieza exacta que necesita con la garantía y respaldo de SLP.',
        catalogUrl: 'https://slp.se/es',
        buttonText: 'Ver Catálogo Online'
    }

    // 6. Gallery
    const galleryDoc = {
        _id: 'gallery',
        _type: 'gallery',
        sectionBadge: 'Nuestra Flota',
        title: 'Galería de',
        titleHighlight: 'Equipos Premium',
        description: 'Conoce la variedad de maquinaria Volvo que atendemos y mantenemos para nuestros clientes en toda Colombia.',
        images: [
            { _key: '1', image: assets.hero1 ? { _type: 'image', asset: { _ref: assets.hero1 } } : undefined, title: 'R100E Rigid Hauler', description: 'Máxima capacidad para operaciones mineras', alt: 'Volvo R100E' },
            { _key: '2', image: assets.gallery1 ? { _type: 'image', asset: { _ref: assets.gallery1 } } : undefined, title: 'Articulado A40D + Cargador L350F', description: 'Trabajo en equipo para máxima productividad', alt: 'Volvo A40D L350F' },
            { _key: '3', image: assets.gallery2 ? { _type: 'image', asset: { _ref: assets.gallery2 } } : undefined, title: 'FMX Dump Truck', description: 'Robustez y eficiencia en cada carga', alt: 'Volvo FMX Dump' },
            { _key: '4', image: assets.gallery3 ? { _type: 'image', asset: { _ref: assets.gallery3 } } : undefined, title: 'Cargadores L20H & L350H', description: 'Del compacto al gigante, tenemos tu solución', alt: 'Volvo L20H L350H' },
            { _key: '5', image: assets.gallery4 ? { _type: 'image', asset: { _ref: assets.gallery4 } } : undefined, title: 'FMX en Acción Urbana', description: 'Versatilidad para cualquier proyecto', alt: 'Volvo FMX Urbano' },
        ]
    }

    // 7. Clients
    const clientsDoc = {
        _id: 'clients',
        _type: 'clients',
        sectionBadge: 'Nuestros Clientes',
        title: 'Clientes que',
        titleHighlight: 'Confían',
        description: 'Empresas líderes del sector industrial en Colombia han elegido a OCC Partes como su aliado estratégico para el mantenimiento y suministro de repuestos de su maquinaria pesada.',
        clientsList: [
            { _key: '1', name: "Siderúrgica de Occidente – SIDOC", location: "Acopi-Valle" },
            { _key: '2', name: "Agregados Y Mezclas Cachibi", location: "Acopi-Valle" },
            { _key: '3', name: "Cesconstrucciones", location: "Cali-Valle" },
            { _key: '4', name: "Perea y CIA SA", location: "Yumbo-Valle" },
            { _key: '5', name: "Italcol SA", location: "Buenaventura-Valle" },
            { _key: '6', name: "Ingeinco", location: "Villavicencio-Meta" },
            { _key: '7', name: "Natrio SA", location: "Buenaventura-Valle" },
            { _key: '8', name: "Maquinaria Zwein", location: "Florida-Valle" },
        ],
        featuredImage: assets.hero4 ? { _type: 'image', asset: { _ref: assets.hero4 } } : undefined,
        imageTitle: 'Volvo FMX Max',
        imageSubtitle: 'Potencia y rendimiento excepcional',
        stats: { number: '8+', text: 'Empresas aliadas' }
    }

    // 8. Contact
    const contactDoc = {
        _id: 'contact',
        _type: 'contact',
        sectionBadge: 'Contáctenos',
        title: '¿Listo para',
        titleHighlight: 'Optimizar',
        description: 'Solicite una cotización o consulte sobre nuestros servicios. Nuestro equipo está listo para atenderle.',
        info: [
            { _key: '1', icon: 'mail', label: "Email", value: "occpartesvolvo@gmail.com", href: "mailto:occpartesvolvo@gmail.com" },
            { _key: '2', icon: 'phone', label: "Celular", value: "321 864 4235 - 316 690 9756", href: "tel:3218644235" },
            { _key: '3', icon: 'mapPin', label: "Ubicación", value: "Yumbo, Valle del Cauca, Colombia", href: "#" },
            { _key: '4', icon: 'clock', label: "Horario", value: "Lun - Vie: 8:00 AM - 6:00 PM", href: "#" },
        ],
        philosophy: [
            "Compromiso técnico",
            "Respuesta oportuna",
            "Calidad en el servicio",
            "Relaciones de largo plazo",
        ],
        bottomImages: [
            { _key: '1', image: assets.hero1 ? { _type: 'image', asset: { _ref: assets.hero1 } } : undefined, caption: 'Camiones Mineros' },
            { _key: '2', image: assets.contact1 ? { _type: 'image', asset: { _ref: assets.contact1 } } : undefined, caption: 'Equipo de Construcción' }
        ]
    }

    console.log('Creating/Updating documents...')

    try {
        await client.createOrReplace(heroDoc)
        await client.createOrReplace(aboutDoc)
        await client.createOrReplace(servicesDoc)
        await client.createOrReplace(brandsDoc)
        await client.createOrReplace(slpCatalogDoc)
        await client.createOrReplace(galleryDoc)
        await client.createOrReplace(clientsDoc)
        await client.createOrReplace(contactDoc)

        console.log('🎉 Full seed completed successfully! All sections are now in Sanity.')
    } catch (error) {
        console.error('❌ Seed failed:', error)
    }
}

seed()
