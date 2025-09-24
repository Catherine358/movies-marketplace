const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromDB<T> (endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const query = new URLSearchParams({ api_key: API_KEY ?? "", language: "en-US",  ...params });
    // no caching
    const res = await fetch(`${BASE_URL}${endpoint}?${query}`, { next: { revalidate: 0 } });
    if (!res.ok) throw new Error("Failed to fetch from DB");
    return res.json();
};