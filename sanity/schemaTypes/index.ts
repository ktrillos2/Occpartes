import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import about from './about'
import services from './services'
import brands from './brands'
import slpCatalog from './slpCatalog'
import gallery from './gallery'
import clients from './clients'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    services,
    brands,
    slpCatalog,
    gallery,
    clients,
    contact,
  ],
}
