import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Sección Hero (Inicio)',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Texto del Badge',
      type: 'string',
      description: 'Ej: "Distribuidores Autorizados SLP en Colombia"',
      initialValue: 'Distribuidores Autorizados SLP en Colombia'
    }),
    defineField({
      name: 'headline',
      title: 'Titular Principal',
      type: 'object',
      fields: [
        defineField({ name: 'line1', type: 'string', title: 'Línea 1', initialValue: 'Repuestos y Servicio' }),
        defineField({ name: 'line2', type: 'string', title: 'Línea 2 (Resaltado)', initialValue: 'Especializado' }),
        defineField({ name: 'line3', type: 'string', title: 'Línea 3', initialValue: 'para Equipos Volvo' }),
      ]
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      initialValue: 'Más de 15 años de experiencia en maquinaria de construcción, camiones, buses y equipos marinos. Cubrimos el 100% del suministro de partes Volvo.'
    }),
    defineField({
      name: 'primaryCta',
      title: 'Botón Principal',
      type: 'object',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Texto', initialValue: 'Solicitar Cotización' }),
        defineField({ name: 'url', type: 'url', title: 'URL', initialValue: 'https://wa.me/573218644235' }),
      ]
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Botón Secundario',
      type: 'object',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Texto', initialValue: 'Explorar Servicios' }),
        defineField({ name: 'url', type: 'string', title: 'URL/Anchor', initialValue: '#servicios' }),
      ]
    }),
    defineField({
      name: 'slides',
      title: 'Slider de Imágenes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'image', title: 'Imagen', options: { hotspot: true } }),
            defineField({ name: 'title', type: 'string', title: 'Título', description: 'Ej: Volvo R100E' }),
            defineField({ name: 'subtitle', type: 'string', title: 'Subtítulo', description: 'Ej: Camiones Mineros' }),
          ]
        }
      ]
    }),
    defineField({
      name: 'serviceHighlights',
      title: 'Destacados de Servicio (Derecha)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', title: 'Número', initialValue: '01' }),
            defineField({ name: 'title', type: 'string', title: 'Título' }),
            defineField({ name: 'description', type: 'text', title: 'Descripción' }),
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'headline.line1',
      subtitle: 'headline.line2'
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Sección Hero',
        subtitle: `${title} ${subtitle}`
      }
    }
  }
})
