
import { MetadataRoute } from 'next';
import { mockPropFirms } from '@/lib/mockData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tradingisez.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/compare-prop-firms',
    '/contact',
    '/firms',
    '/free-resources',
    '/free-resources/al-brooks-course',
    '/free-resources/audiobooks',
    '/rules',
    '/terms-of-service',
    '/site-map',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const firmPages = mockPropFirms.map((firm) => ({
    url: `${siteUrl}/firms/${firm.slug}`,
    lastModified: new Date(firm.dateCreated || '2023-01-01').toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  const rulePages = mockPropFirms.map((firm) => ({
    url: `${siteUrl}/rules/${firm.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const comparePages = [];
  for (let i = 0; i < mockPropFirms.length; i++) {
    for (let j = i + 1; j < mockPropFirms.length; j++) {
      comparePages.push({
        url: `${siteUrl}/compare-prop-firms/${mockPropFirms[i].slug}-vs-${mockPropFirms[j].slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }


  return [...staticPages, ...firmPages, ...rulePages, ...comparePages];
}
