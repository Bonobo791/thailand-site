import { defineCollection, z } from 'astro:content';

// Define the schema for the "pages" collection
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
    order: z.number().optional(),
    featured: z.boolean().optional(),
  }),
});

// Export the collections
export const collections = {
  'pages': pagesCollection,
}; 