import { defineCollection, z } from "astro:content";

const booksCollections = defineCollection({

    type: "content",
    schema: {
        title: "string",
        description: "string",
        author: "string",
        img: "string",
        readtime: "number",
        buy: "string"
    }
})

export const collections = {
    booksCollections
}