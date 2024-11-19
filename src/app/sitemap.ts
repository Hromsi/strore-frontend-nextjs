import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: String(process.env.PUBLIC_URL),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]
}