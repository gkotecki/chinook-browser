import { InferModel } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const artistTable = sqliteTable("Artist", {
  id: integer("ArtistId").primaryKey(),
  name: text("Name"),
})

export type Artist = InferModel<typeof artistTable>
export type InsertArtist = InferModel<typeof artistTable, "insert">
