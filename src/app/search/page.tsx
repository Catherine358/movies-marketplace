import { fetchFromDB } from "@/lib/helpers";
import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

export const dynamic = "force-dynamic";

interface SearchPageProps {
    searchParams: { query?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const query = searchParams.query || "";
    const res = await fetchFromDB<{ results: Movie[] }>("/search/movie", { query });
    const movies = res.results;

    return (
      <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Search results for &#34;{query}&#34;</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
              ))}
          </div>
      </main>
    );
};