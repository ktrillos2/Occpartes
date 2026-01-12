import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'clients',
    title: 'Sección Clientes',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Nuestros Clientes'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Clientes que'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado',
            type: 'string',
            initialValue: 'Confían'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text'
        }),
        defineField({
            name: 'clientsList',
            title: 'Lista de Clientes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Empresa' }),
                        defineField({ name: 'location', type: 'string', title: 'Ubicación' }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'featuredImage',
            title: 'Imagen Destacada (Derecha)',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'imageTitle',
            title: 'Título de Imagen',
            type: 'string',
            initialValue: 'Volvo FMX Max'
        }),
        defineField({
            name: 'imageSubtitle',
            title: 'Subtítulo de Imagen',
            type: 'string',
            initialValue: 'Potencia y rendimiento excepcional'
        }),
        defineField({
            name: 'stats',
            title: 'Estadística (Badge Flotante)',
            type: 'object',
            fields: [
                defineField({ name: 'number', type: 'string', title: 'Número' }),
                defineField({ name: 'text', type: 'string', title: 'Texto' }),
            ]
        })
    ]
})
