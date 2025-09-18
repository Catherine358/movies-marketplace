import { fetchFromDB } from "@/lib/helpers";
import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const moviesData = await fetchFromDB<{ results: Movie[] }>("/movie/popular");
  const movies = moviesData.results;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="p-6">
        <h1>Popular Movies</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
