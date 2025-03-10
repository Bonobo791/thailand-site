/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'astro:content' {
  export interface CollectionEntry<C extends keyof typeof collections> {
    data: (typeof collections)[C]['schema'] extends infer T
    ? T extends import('zod').ZodType<any, any, infer Y>
    ? Y
    : never
    : never;
    render(): Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }

  export const collections: {
    'blog': {
      schema: import('zod').ZodObject<{
        title: import('zod').ZodString;
        description: import('zod').ZodOptional<import('zod').ZodString>;
        pubDate: import('zod').ZodDate;
        updatedDate: import('zod').ZodOptional<import('zod').ZodDate>;
        heroImage: import('zod').ZodOptional<import('zod').ZodString>;
        tags: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString>>;
      }>;
    };
    'pages': {
      schema: import('zod').ZodObject<{
        title: import('zod').ZodString;
        description: import('zod').ZodOptional<import('zod').ZodString>;
        lastUpdated: import('zod').ZodOptional<import('zod').ZodDate>;
        order: import('zod').ZodOptional<import('zod').ZodNumber>;
        featured: import('zod').ZodOptional<import('zod').ZodBoolean>;
      }>;
    };
  };

  export function getCollection<C extends keyof typeof collections>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => boolean
  ): Promise<CollectionEntry<C>[]>;

  export function getEntry<C extends keyof typeof collections>(
    collection: C,
    slug: string
  ): Promise<CollectionEntry<C>>;
}
