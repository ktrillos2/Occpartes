
import { createClient } from 'next-sanity'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.error('Missing Sanity configuration. Please check .env.local')
    process.exit(1)
}

// We need a write token for this! 
// If SANITY_API_TOKEN is not in env, we can't write using the client.
// Assuming the user has one or I can prompt them. 
// For now, I'll rely on the user having logged in via `sanity login` if I was running a CLI command, 
// but for a script using the client, I need a token if I want to write.
// Actually, `sanity exec` runs in a context where it might have access? 
// No, usually best to use a token. 
// Let's assume for now I will use the client with a token if available, or just the project ID/dataset if dataset is public (but public likely can't write).
// Wait, to WRITE I definitely need a token.
// The user request said "subelo automaticamente". 
// I will assume I can get a token or I will just generate the script and tell the user to run it and provide a token if needed.
// Or effectively, I can ask the user for a token if it's missing.

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.SANITY_AUTH_TOKEN

console.log('Configuration:', {
    projectId,
    dataset,
    hasToken: Boolean(token),
    tokenStart: token ? token.substring(0, 4) : 'none'
})

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: false,
    token: token || undefined, // Use token if available, otherwise rely on local session if possible
})

// --- Helper to upload image ---
async function uploadImage(imagePath: string) {
    try {
        const fullPath = path.join(process.cwd(), 'public', imagePath)
        if (!fs.existsSync(fullPath)) {
            console.warn(`Image not found: ${fullPath}`)
            return null
        }
        const buffer = fs.readFileSync(fullPath)
        const asset = await client.assets.upload('image', buffer, {
            filename: path.basename(imagePath)
        })
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        }
    } catch (error) {
        console.error(`Failed to upload image ${imagePath}:`, error)
        return null
    }
}

async function main() {
    console.log('Starting migration...')

    // --- 1. HERO ---
    const heroImage1 = await uploadImage('/images/volvo-203.jpg')
    const heroImage2 = await uploadImage('/images/volvo-201.jpg')
    const heroImage3 = await uploadImage('/images/screenshot-20180903-125506-2.png')
    const heroImage4 = await uploadImage('/images/fmx.jpg')

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
        primaryCta: { text: 'Solicitar Cotización', url: 'https://wa.me/573218644235' },
        secondaryCta: { text: 'Explorar Servicios', url: '#servicios' },
        slides: [
            { image: heroImage1, title: 'Volvo R100E', subtitle: 'Camiones Mineros' },
            { image: heroImage2, title: 'Volvo A45G', subtitle: 'Articulados' },
            { image: heroImage3, title: 'Volvo EC380E', subtitle: 'Excavadoras' },
            { image: heroImage4, title: 'Volvo FMX', subtitle: 'Camiones de Obra' },
        ],
        serviceHighlights: [
            { number: "01", title: "Repuestos Originales", description: "Suministro de partes originales volvo, alternativos SLP con 24 meses de garantia y OEM" },
            { number: "02", title: "Servicio Técnico", description: "Herramienta de diagnostico VCADS Pro y CNH DPA 5" },
            { number: "03", title: "Logística Express", description: "Importaciones entrega en 7 dias (Partes disponibles en local)" },
            { number: "04", title: "Emergencias 24/7", description: "Soporte en campo para tu operación" },
        ]
    }

    // --- 2. ABOUT ---
    const aboutImage1 = await uploadImage('/images/excavadora-204.jpg')
    const aboutImage2 = await uploadImage('/images/excavadora-205.jpg')
    // Image 3 reuse heroImage3
    // Image 4 reuse heroImage2

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
        experienceTitle: '', // Not strictly in component but good for schema
        galleryImages: [
            { image: aboutImage1, alt: "Excavadora Volvo EC220 en cantera", caption: "Excavadora EC220" },
            { image: aboutImage2, alt: "Volvo L25 Electric - Tecnología Premium", caption: "L25 Electric" },
            { image: heroImage3, alt: "Excavadora Volvo excavando rocas", caption: "Excavación Pesada" },
            { image: heroImage2, alt: "Volvo A45G Articulado en terreno", caption: "Articulado A45G" },
        ]
    }

    // --- 3. SERVICES ---
    const servicesDoc = {
        _id: 'services',
        _type: 'services',
        sectionBadge: 'Nuestros Servicios',
        title: 'Soluciones Integrales para su',
        titleHighlight: 'Operación',
        description: 'OCC Partes Volvo SAS ofrece soluciones completas para mantener su maquinaria operando al máximo rendimiento con calidad y compromiso técnico.',
        ctaText: 'Solicitar Servicio',
        servicesList: [
            { icon: 'certified', title: "Repuestos Certificados", description: "Suministro de repuestos originales y alternativos certificados SLP con 24 meses de garantía.", highlight: "24 meses garantía" },
            { icon: 'maintenance', title: "Mantenimiento Preventivo y Correctivo", description: "Servicio con filtración original, siguiendo rutinas técnicas y protocolos según el fabricante Volvo.", highlight: "Protocolos Volvo" },
            { icon: 'diagnostics', title: "Diagnóstico Electrónico Avanzado", description: "Herramientas VCADS Pro herramienta diagnóstico volvo y CNH DPA 5 para equipos CASE, New Holland, Kobelco.", highlight: "Herramienta de diagnostico" },
            { icon: 'emergency', title: "Emergencias en Campo", description: "Atención de emergencias operativas directamente en su ubicación con respuesta oportuna.", highlight: "Respuesta inmediata" },
            { icon: 'reports', title: "Reportes Técnicos", description: "Plataforma Meknit para acompañamiento y trazabilidad en reportes técnicos de servicios ejecutados.", highlight: "Plataforma Meknit" },
            { icon: 'logistics', title: "Logística Eficiente", description: "Inventarios de seguridad local e importaciones con tiempos de entrega de 7 días.", highlight: "Entrega en 7 días" },
        ]
    }

    // --- 4. BRANDS ---
    const brandsImage = await uploadImage('/images/image.png')
    const brandsDoc = {
        _id: 'brands',
        _type: 'brands',
        sectionBadge: 'Nuestras Marcas',
        title: 'Aliados de las',
        titleHighlight: 'Mejores Marcas',
        description: 'Trabajamos con las marcas líderes del sector industrial para garantizar la máxima calidad en repuestos y servicios.',
        categories: [
            { id: 'volvo', name: 'Familia Volvo', description: 'Especialistas certificados en toda la línea Volvo', color: '#1E4B8E', brands: ["Volvo Construction Equipment", "Volvo Trucks", "Volvo Penta", "Volvo Buses"] },
            { id: 'partners', name: 'Marcas Asociadas', description: 'Partners oficiales de las mejores marcas del sector', color: '#F7A600', brands: ["Donaldson", "Berco", "Meritor", "Bosch", "Rexroth", "SLP"] },
            { id: 'diagnostic', name: 'Diagnóstico Especializado', description: 'Herramientas avanzadas para múltiples marcas', color: '#2D3748', brands: ["CASE Construction", "Kobelco", "New Holland"] },
            { id: 'others', name: 'Otras Marcas Atendidas', description: 'Amplia cobertura en el sector industrial', color: '#718096', brands: ["Wacker Neuson", "Bobcat", "JCB", "Scandia", "Trelleborg OTR", "Zoomlion", "CASE", "Hyundai", "SDLG", "Caterpillar", "Sennebogen", "Kobelco"] },
        ],
        promoCard: {
            image: brandsImage,
            title: '100% Cobertura en Repuestos Volvo',
            text: 'Partes originales y alternativas con garantía SLP de 24 meses.',
            buttonText: 'Consultar Disponibilidad'
        }
    }

    // --- 5. SLP CATALOG ---
    const slpDoc = {
        _id: 'slpCatalog',
        _type: 'slpCatalog',
        badgeText: 'CATÁLOGO OFICIAL',
        title: 'Catálogo Swedish Lorry Parts (SLP)',
        description: 'Acceda al catálogo completo de repuestos de alta calidad.\nEncuentre la pieza exacta que necesita con la garantía y respaldo de SLP.',
        catalogUrl: 'https://slp.se/es',
        buttonText: 'Ver Catálogo Online'
    }

    // --- 6. GALLERY ---
    const galleryImage1 = heroImage1 // R100E
    const galleryImage2 = await uploadImage('/images/volvo-202.jpeg')
    const galleryImage3 = await uploadImage('/images/volvo-20truck-202.jpg')
    const galleryImage4 = await uploadImage('/images/screenshot-20180618-053650-2.png')
    const galleryImage5 = await uploadImage('/images/fmx-202.jpg')

    const galleryDoc = {
        _id: 'gallery',
        _type: 'gallery',
        sectionBadge: 'Nuestra Flota',
        title: 'Galería de',
        titleHighlight: 'Equipos Premium',
        description: 'Conoce la variedad de maquinaria Volvo que atendemos y mantenemos para nuestros clientes en toda Colombia.',
        images: [
            { image: galleryImage1, title: 'R100E Rigid Hauler', description: 'Máxima capacidad para operaciones mineras', alt: 'Volvo R100E Rigid Hauler nocturno' },
            { image: galleryImage2, title: 'Articulado A40D + Cargador L350F', description: 'Trabajo en equipo para máxima productividad', alt: 'Volvo A40D y L350F en cantera' },
            { image: galleryImage3, title: 'FMX Dump Truck', description: 'Robustez y eficiencia en cada carga', alt: 'Volvo FMX Dump Truck verde' },
            { image: galleryImage4, title: 'Cargadores L20H & L350H', description: 'Del compacto al gigante, tenemos tu solución', alt: 'Cargadores Volvo L20H y L350H' },
            { image: galleryImage5, title: 'FMX en Acción Urbana', description: 'Versatilidad para cualquier proyecto', alt: 'Volvo FMX en construcción urbana' },
        ]
    }

    // --- 7. CLIENTS ---
    const clientsDoc = {
        _id: 'clients',
        _type: 'clients',
        sectionBadge: 'Nuestros Clientes',
        title: 'Clientes que',
        titleHighlight: 'Confían',
        description: 'Empresas líderes del sector industrial en Colombia han elegido a OCC Partes como su aliado estratégico para el mantenimiento y suministro de repuestos de su maquinaria pesada.',
        clientsList: [
            { name: "Siderúrgica de Occidente – SIDOC", location: "Acopi-Valle" },
            { name: "Agregados Y Mezclas Cachibi", location: "Acopi-Valle" },
            { name: "Cesconstrucciones", location: "Cali-Valle" },
            { name: "Perea y CIA SA", location: "Yumbo-Valle" },
            { name: "Italcol SA", location: "Buenaventura-Valle" },
            { name: "Ingeinco", location: "Villavicencio-Meta" },
            { name: "Natrio SA", location: "Buenaventura-Valle" },
            { name: "Maquinaria Zwein", location: "Florida-Valle" },
        ],
        featuredImage: heroImage4, // FMX
        imageTitle: 'Volvo FMX Max',
        imageSubtitle: 'Potencia y rendimiento excepcional',
        stats: { number: '8+', text: 'Empresas aliadas' }
    }

    // --- 8. CONTACT ---
    const contactImage1 = heroImage1 // R100E
    const contactImage2 = await uploadImage('/images/screenshot-20180629-133933-2.png')

    const contactDoc = {
        _id: 'contact',
        _type: 'contact',
        sectionBadge: 'Contáctenos',
        title: '¿Listo para',
        titleHighlight: 'Optimizar',
        description: 'Solicite una cotización o consulte sobre nuestros servicios. Nuestro equipo está listo para atenderle.',
        info: [
            { icon: 'mail', label: 'Email', value: 'occpartesvolvo@gmail.com', href: 'mailto:occpartesvolvo@gmail.com' },
            { icon: 'phone', label: 'Celular', value: '321 864 4235 - 316 690 9756', href: 'tel:3218644235' },
            { icon: 'mapPin', label: 'Ubicación', value: 'Yumbo, Valle del Cauca, Colombia', href: '#' },
            { icon: 'clock', label: 'Horario', value: 'Lun - Vie: 8:00 AM - 6:00 PM', href: '#' },
        ],
        philosophy: [
            "Compromiso técnico",
            "Respuesta oportuna",
            "Calidad en el servicio",
            "Relaciones de largo plazo",
        ],
        bottomImages: [
            { image: contactImage1, caption: 'Camiones Mineros' },
            { image: contactImage2, caption: 'Equipo de Construcción' }
        ]
    }

    // --- UPLOAD DOCUMENTS ---
    // Use a loose type for the array to allow different document structures
    const docs: Array<{ _id: string; _type: string;[key: string]: any }> = [
        heroDoc, aboutDoc, servicesDoc, brandsDoc, slpDoc, galleryDoc, clientsDoc, contactDoc
    ]

    for (const doc of docs) {
        try {
            console.log(`Creating/Updating document: ${doc._id} (${doc._type})`)
            await client.createOrReplace(doc)
            console.log(`✓ Success: ${doc._id}`)
        } catch (error) {
            console.error(`✗ Failed to update ${doc._id}:`, error)
        }
    }

    console.log('\nMigration completed!')
}

main().catch((err) => {
    console.error('Migration failed:', err)
    process.exit(1)
})
