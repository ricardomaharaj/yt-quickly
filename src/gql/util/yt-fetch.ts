import { env } from '../env'

const BASE_API_URL = 'https://www.googleapis.com/youtube/v3'

export async function ytFetch<T = unknown>(
	path: string,
	params: URLSearchParams,
) {
	params.append('key', env.GOOGLE_API_KEY)
	const res = await fetch(`${BASE_API_URL}${path}?${params}`, {
		cache: 'force-cache',
	})
	const data = await res.json()
	return data as T
}
