import { fetchFromDB } from "@/lib/helpers";
import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

export const revalidate = 300;

export default async function Home() {
  const moviesData = await fetchFromDB<{ results: Movie[] }>("/movie/popular");
  const movies = moviesData.results;

  return (
   <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
  );
}
