import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '@/sanity/env'

const builder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

export const urlFor = (source: any) => {
    if (!source || !source.asset) return null
    return builder.image(source)
}
