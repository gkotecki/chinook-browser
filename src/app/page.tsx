import ArtistsClient from "@/components/ArtistsClient"
import ArtistsServer from "@/components/ArtistsServer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        <ArtistsClient />
        <ArtistsServer />
      </div>
    </main>
  )
}
