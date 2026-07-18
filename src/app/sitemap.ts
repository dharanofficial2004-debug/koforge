import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://koforge.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/website-development',
    '/services/performance-ads',
    '/services/influencer-marketing',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes;
}
