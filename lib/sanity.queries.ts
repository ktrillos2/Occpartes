import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]`
export const aboutQuery = groq`*[_type == "about"][0]`
export const servicesQuery = groq`*[_type == "services"][0]`
export const brandsQuery = groq`*[_type == "brands"][0]`
export const slpCatalogQuery = groq`*[_type == "slpCatalog"][0]`
export const galleryQuery = groq`*[_type == "gallery"][0]`
export const clientsQuery = groq`*[_type == "clients"][0]`
export const contactQuery = groq`*[_type == "contact"][0]`

export const pageQuery = groq`{
  "hero": *[_type == "hero"][0],
  "about": *[_type == "about"][0],
  "services": *[_type == "services"][0],
  "brands": *[_type == "brands"][0],
  "slpCatalog": *[_type == "slpCatalog"][0],
  "gallery": *[_type == "gallery"][0],
  "clients": *[_type == "clients"][0],
  "contact": *[_type == "contact"][0]
}`
