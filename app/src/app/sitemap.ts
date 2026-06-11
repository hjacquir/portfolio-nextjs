import {MetadataRoute} from 'next'
import data from '@/src/data/urls.json'

export default function sitemap(): MetadataRoute.Sitemap {
    return data.map((item) => ({
        url: item.url,
        lastModified: item.lastModified,
        changeFrequency: item.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: item.priority
    }))
}
