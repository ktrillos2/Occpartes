import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'Sección Nosotros',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Quiénes Somos'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Expertos en Soluciones para'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado del Título',
            type: 'string',
            initialValue: 'Equipos Premium'
        }),
        defineField({
            name: 'description',
            title: 'Descripción Principal',
            type: 'text',
            initialValue: 'Somos un grupo humano con más de 15 años de experiencia en la marca Volvo...'
        }),
        defineField({
            name: 'features',
            title: 'Lista de Características',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'experienceTitle',
            title: 'Título de Experiencia (Derecha)',
            type: 'string',
            initialValue: 'Distribuidores Autorizados de SLP'
        }),
        defineField({
            name: 'experienceDescription',
            title: 'Descripción de Experiencia',
            type: 'text',
        }),
        defineField({
            name: 'galleryImages',
            title: 'Imágenes de Galería (4 imágenes)',
            type: 'array',
            validation: Rule => Rule.max(4),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', type: 'image', title: 'Imagen', options: { hotspot: true } }),
                        defineField({ name: 'alt', type: 'string', title: 'Texto Alternativo' }),
                        defineField({ name: 'caption', type: 'string', title: 'Leyenda (Overlay)' }),
                    ]
                }
            ]
        })
    ]
})
