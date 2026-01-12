import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Sección Contacto',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Contáctenos'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: '¿Listo para'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado',
            type: 'string',
            initialValue: 'Optimizar'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text'
        }),
        defineField({
            name: 'info',
            title: 'Información de Contacto',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string', title: 'Etiqueta' }),
                        defineField({ name: 'value', type: 'string', title: 'Valor' }),
                        defineField({ name: 'href', type: 'string', title: 'Enlace (mailto/tel)' }),
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Mail', value: 'mail' },
                                    { title: 'Phone', value: 'phone' },
                                    { title: 'MapPin', value: 'mapPin' },
                                    { title: 'Clock', value: 'clock' },
                                ]
                            }
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'philosophy',
            title: 'Filosofía (Puntos)',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'bottomImages',
            title: 'Imágenes Inferiores',
            type: 'array',
            validation: Rule => Rule.max(2),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', type: 'image', title: 'Imagen' }),
                        defineField({ name: 'caption', type: 'string', title: 'Texto de Fondo' })
                    ]
                }
            ]
        })
    ]
})
