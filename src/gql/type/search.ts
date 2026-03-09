import { builder } from '../builder'

builder.objectType('SearchResult', {
	fields: (t) => ({
		// ID
		playlistId: t.exposeString('playlistId'),
		videoId: t.exposeString('videoId'),

		// SNIPPET
		channelId: t.exposeString('channelId'),
		channelTitle: t.exposeString('channelTitle'),
		description: t.exposeString('description'),
		liveBroadcastContent: t.exposeString('liveBroadcastContent'),
		publishedAt: t.exposeString('publishedAt'),
		thumbnailUrl: t.exposeString('thumbnailUrl'),
		title: t.exposeString('title'),
	}),
})

builder.objectType('SearchResponse', {
	fields: (t) => ({
		nextPageToken: t.exposeString('nextPageToken'),
		prevPageToken: t.exposeString('prevPageToken'),
		items: t.expose('items', { type: ['SearchResult'] }),
	}),
})
