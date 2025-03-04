import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    topic: z.string(),
    subtopic: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = {
  'blog': blogCollection
}; 