import preact from "@preact/preset-vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [preact(), tailwindcss()],
	server: {
		port: 3000,
		proxy: { "/gql": "http://localhost:4000" },
	},
})
