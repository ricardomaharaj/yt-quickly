// @ts-expect-error
const netlifyEnv = globalThis?.Netlify?.env

function getEnvVar(key: string) {
	const envVar = netlifyEnv?.get(key) || process.env[key]
	if (!envVar) throw new Error(key)
	return envVar as string
}

export const env = {
	GOOGLE_API_KEY: getEnvVar("GOOGLE_API_KEY"),
}
