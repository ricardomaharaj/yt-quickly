import { builder } from '../builder'

builder.objectType('Channel', {
	fields: (t) => ({
		// SNIPPET
		country: t.exposeString('country'),
		customUrl: t.exposeString('customUrl'),
		defaultLanguage: t.exposeString('defaultLanguage'),
		description: t.exposeString('description'),
		publishedAt: t.exposeString('publishedAt'),
		thumbnailUrl: t.exposeString('thumbnailUrl'),
		title: t.exposeString('title'),

		// CONTENT DETAILS
		uploadsPlaylist: t.exposeString('uploadsPlaylist'),
	}),
})
