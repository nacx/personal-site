import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const TALKS_PATH = "src/data/talks";
export const PATENTS_PATH = "src/data/patents";
export const PUBLICATIONS_PATH = "src/data/publications";
export const PODCASTS_PATH = "src/data/podcasts";

const talks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${TALKS_PATH}` }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    slidesLink: z.string().optional(),
    videoLink: z.string().optional(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});

const patents = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PATENTS_PATH}` }),
  schema: z.object({
    title: z.string(),
    number: z.string(),
    publicationDate: z.coerce.date(),
    inventors: z.string(),
    link: z.string(),
    description: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PUBLICATIONS_PATH}` }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.string(),
    description: z.string(),
    link: z.string().optional(),
    codeLink: z.string().optional(),
    blogLink: z.string().optional(),
  }),
});

const podcasts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PODCASTS_PATH}` }),
  schema: z.object({
    title: z.string(),
    host: z.string(),
    event: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
    link: z.string(),
    audioLink: z.string().optional(),
    videoLink: z.string().optional(),
  }),
});

export const collections = { talks, patents, publications, podcasts };
