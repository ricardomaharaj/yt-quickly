import { builder } from '../builder'

builder.objectType('Video', {
	fields: (t) => ({
		// SNIPPET
		categoryId: t.exposeString('categoryId'),
		channelId: t.exposeString('channelId'),
		channelTitle: t.exposeString('channelTitle'),
		defaultAudioLanguage: t.exposeString('defaultAudioLanguage'),
		defaultLanguage: t.exposeString('defaultLanguage'),
		description: t.exposeString('description'),
		liveBroadcastContent: t.exposeString('liveBroadcastContent'),
		publishedAt: t.exposeString('publishedAt'),
		tags: t.exposeStringList('tags'),
		thumbnails: t.expose('thumbnails', { type: 'Thumbnails' }),
		title: t.exposeString('title'),

		// STATS
		commentCount: t.exposeString('commentCount'),
		dislikeCount: t.exposeString('dislikeCount'),
		favoriteCount: t.exposeString('favoriteCount'),
		likeCount: t.exposeString('likeCount'),
		viewCount: t.exposeString('viewCount'),
	}),
})

builder.objectType('VideoResponse', {
	fields: (t) => ({
		nextPageToken: t.exposeString('nextPageToken'),
		prevPageToken: t.exposeString('prevPageToken'),
		items: t.expose('items', { type: ['Video'] }),
	}),
})
