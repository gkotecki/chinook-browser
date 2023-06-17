"use client"

import { Artist } from "@/lib/db/schema"
import { useEffect, useState } from "react"

const ArtistsClient = () => {
  const [response, setResponse] = useState<Artist[] | undefined>(undefined)

  function getArtists() {
    setResponse(undefined)
    fetch(`/api/artist`)
      .then(res => res.json())
      .then(json => setResponse(json))
  }

  useEffect(() => {
    getArtists()
  }, [])

  return (
    <section className="flex flex-1 flex-col rounded-lg bg-neutral-900 p-4">
      <h1>Client Artists:</h1>

      <button onClick={() => getArtists()}>GET artists</button>

      {!!response &&
        response.map(({ id, name }) => (
          <p key={id}>
            {id}: {name}
          </p>
        ))}
    </section>
  )
}

export default ArtistsClient
