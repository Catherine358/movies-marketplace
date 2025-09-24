"use client";

import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/movie";

interface MoviePageProps {
    params: Promise<{ id: string }>;
}

export default function MoviePage({ params }: MoviePageProps) {
    const { id } = use(params);
    const { data, isLoading } = useQuery<Movie>({
        // checking cache
        queryKey: ["movie", id],
        // if no cache -> call function
        queryFn: () => fetch(`/api/movie/${id}`).then((res) => res.json()),
    });

    console.log(data)

    if (isLoading) return <p>Loading...</p>

    if (!data) return <p>Movie not found.</p>

    const { title, overview, release_date } = data;

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-2">{overview}</p>
            <p className="text-gray-500">Release date: {release_date}</p>
        </main>
    );
};