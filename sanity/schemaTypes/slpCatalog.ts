import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'slpCatalog',
    title: 'Sección Catálogo SLP',
    type: 'document',
    fields: [
        defineField({
            name: 'badgeText',
            title: 'Texto Badge',
            type: 'string',
            initialValue: 'CATÁLOGO OFICIAL'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Catálogo Swedish Lorry Parts (SLP)'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text'
        }),
        defineField({
            name: 'catalogUrl',
            title: 'URL del Catálogo',
            type: 'url',
            initialValue: 'https://slp.se/es'
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto del Botón',
            type: 'string',
            initialValue: 'Ver Catálogo Online'
        })
    ]
})
