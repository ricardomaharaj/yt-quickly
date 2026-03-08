import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsPaths(), preact(), tailwindcss()],
	server: {
		port: 3000,
		proxy: {
			'/gql': 'http://localhost:4000',
		},
	},
})
