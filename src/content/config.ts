import { defineCollection, z } from 'astro:content';

// Define a schema for blog posts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional()
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
}; 