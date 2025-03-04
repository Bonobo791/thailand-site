import { defineCollection, z } from 'astro:content';

// Define a schema for pages
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date().optional(),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Export the collections
export const collections = {
  'pages': pagesCollection,
}; 