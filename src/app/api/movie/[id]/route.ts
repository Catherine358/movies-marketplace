// created own api on server in order not to expose api key on client
import { fetchMovieById } from "@/lib/helpers";

export async function GET(req: Request, { params }: { params: { id: string}}) {
    try {
        const { id } = params;
        const movie = await fetchMovieById(`/movie/${id}`);
        return new Response(JSON.stringify(movie), { status: 200 });
    } catch (e) {
        return new Response("Failed to fetch movie.", { status: 500 });
    }
};