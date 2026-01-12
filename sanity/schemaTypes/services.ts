import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'services',
    title: 'Sección Servicios',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionBadge',
            title: 'Badge de Sección',
            type: 'string',
            initialValue: 'Nuestros Servicios'
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Soluciones Integrales para su'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Resaltado del Título',
            type: 'string',
            initialValue: 'Operación'
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'servicesList',
            title: 'Lista de Servicios',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Título' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción' }),
                        defineField({ name: 'highlight', type: 'string', title: 'Texto Resaltado (Capsule)' }),
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Certified Parts', value: 'certified' },
                                    { title: 'Maintenance', value: 'maintenance' },
                                    { title: 'Diagnostics', value: 'diagnostics' },
                                    { title: 'Emergency', value: 'emergency' },
                                    { title: 'Reports', value: 'reports' },
                                    { title: 'Logistics', value: 'logistics' },
                                ]
                            }
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'ctaText',
            title: 'Texto del Botón',
            type: 'string',
            initialValue: 'Solicitar Servicio'
        })
    ]
})
