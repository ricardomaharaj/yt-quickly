import { builder } from '../builder'

builder.objectType('PlaylistItem', {
	fields: (t) => ({
		// SNIPPET
		channelId: t.exposeString('channelId'),
		channelTitle: t.exposeString('channelTitle'),
		description: t.exposeString('description'),
		playlistId: t.exposeString('playlistId'),
		position: t.exposeInt('position'),
		publishedAt: t.exposeString('publishedAt'),
		thumbnails: t.expose('thumbnails', { type: 'Thumbnails' }),
		title: t.exposeString('title'),
		videoId: t.exposeString('videoId'),
		videoOwnerChannelId: t.exposeString('videoOwnerChannelId'),
		videoOwnerChannelTitle: t.exposeString('videoOwnerChannelTitle'),
	}),
})

builder.objectType('PlaylistItemsResponse', {
	fields: (t) => ({
		nextPageToken: t.exposeString('nextPageToken'),
		prevPageToken: t.exposeString('prevPageToken'),
		items: t.expose('items', { type: ['PlaylistItem'] }),
	}),
})
