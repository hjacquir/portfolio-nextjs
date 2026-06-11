import {MetadataRoute} from 'next'
import data from '@/src/data/urls.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.PUBLIC_BASE_URL

    return data.map((item) => ({
        url: `${baseUrl}${item.url}`,
        lastModified: item.lastModified,
        changeFrequency: item.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: item.priority
    }))
}
