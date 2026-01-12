import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Sección Galería',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Nuestra Flota'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Galería de'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado',
            type: 'string',
            initialValue: 'Equipos Premium'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text'
        }),
        defineField({
            name: 'images',
            title: 'Imágenes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', type: 'image', title: 'Imagen', options: { hotspot: true } }),
                        defineField({ name: 'title', type: 'string', title: 'Título' }),
                        defineField({ name: 'description', type: 'string', title: 'Descripción' }),
                        defineField({ name: 'alt', type: 'string', title: 'Texto Alternativo' }),
                    ]
                }
            ]
        })
    ]
})
