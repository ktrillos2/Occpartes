import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'brands',
    title: 'Sección Marcas',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Nuestras Marcas'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Aliados de las'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado del Título',
            type: 'string',
            initialValue: 'Mejores Marcas'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'categories',
            title: 'Categorías de Marcas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'id', type: 'string', title: 'ID Único' }),
                        defineField({ name: 'name', type: 'string', title: 'Nombre de Categoría' }),
                        defineField({ name: 'description', type: 'string', title: 'Descripción Corta' }),
                        defineField({ name: 'color', type: 'string', title: 'Color Hex (#RRGGBB)' }),
                        defineField({
                            name: 'brands',
                            title: 'Marcas',
                            type: 'array',
                            of: [{ type: 'string' }]
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'promoCard',
            title: 'Tarjeta Promocional (Abajo)',
            type: 'object',
            fields: [
                defineField({ name: 'image', type: 'image', title: 'Imagen de Fondo', options: { hotspot: true } }),
                defineField({ name: 'title', type: 'string', title: 'Título' }),
                defineField({ name: 'text', type: 'text', title: 'Texto' }),
                defineField({ name: 'buttonText', type: 'string', title: 'Texto del Botón' }),
            ]
        })
    ]
})
