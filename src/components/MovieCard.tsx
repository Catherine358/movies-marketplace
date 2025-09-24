import { Movie } from "@/types/movie";
import Link from "next/link";

interface MovieCardProps {
   movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
    const { id, poster_path, overview, title } = movie;
    return (
        <Link href={`/movie/${id}`}>
            <div className="bg-white rounded-xl shadow p-2 cursor-pointer hover:scale-105 transition-transform">
                {poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                        className="rounded"
                    />
                ) : (
                    <div className="h-[45opx] w-full bg-gray-200 flex items-center justify-center">
                        <span>No image</span>
                    </div>
                )}
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </Link>
    );
};