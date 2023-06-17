import db from "@/lib/db"
import { artistTable } from "@/lib/db/schema"

const ArtistsServer = async () => {
  const artists = await db.select().from(artistTable).all()

  return (
    <section className="flex flex-1 flex-col rounded-lg bg-neutral-900 p-4">
      <h1>Server Artists:</h1>

      {!!artists &&
        artists.map(({ id, name }) => (
          <p key={id}>
            {id}: {name}
          </p>
        ))}
    </section>
  )
}

export default ArtistsServer
