import { Movie } from "@/types/movie";

interface MovieCardProps {
   movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
      <div className="bg-white rounded-xl shadow p-2">
          {movie.poster_path ? (
              <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded"
              />
          ) : (
              <div className="h-[45opx] w-full bg-gray-200 flex items-center justify-center">
                  <span>No image</span>
              </div>
          )}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
      </div>
    );
};