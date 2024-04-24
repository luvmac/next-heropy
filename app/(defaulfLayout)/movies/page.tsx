import Link from 'next/link'

export interface ResponseValue {
  Search: Search[]
  totalResults: string
  Response: string
}

export interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default async function MoviesPage({
  searchParams: { title }
}: {
  searchParams: { title?: string }
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/movies?title=${title}`
  )
  const { movies } = await res.json()

  return (
    <>
      <ul>
        {movies.map((movie: Search) => {
          return (
            <li key={movie.imdbID}>
              <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
