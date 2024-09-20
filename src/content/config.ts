import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      germany: z.string().url(),
      world: z.string().url(),
    }),
  })
})

export const collections = { books }



/* const booksCollections = defineCollection({

    type: "content",
    schema: {
        title: "string",
        description: "string",
        author: "string",
        img: "string",
        readtime: "number",
        buy: "object"
    }
})

export const collections = {
    booksCollections
} */