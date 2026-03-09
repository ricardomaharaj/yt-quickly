import { builder } from '../builder'

builder.objectType('Comment', {
	fields: (t) => ({
		// SNIPPET
		authorChannelId: t.exposeString('authorChannelId'),
		authorChannelUrl: t.exposeString('authorChannelUrl'),
		authorDisplayName: t.exposeString('authorDisplayName'),
		authorProfileImageUrl: t.exposeString('authorProfileImageUrl'),
		channelId: t.exposeString('channelId'),
		likeCount: t.exposeString('likeCount'),
		moderationStatus: t.exposeString('moderationStatus'),
		parentId: t.exposeString('parentId'),
		publishedAt: t.exposeString('publishedAt'),
		textDisplay: t.exposeString('textDisplay'),
		updatedAt: t.exposeString('updatedAt'),
		viewerRating: t.exposeString('viewerRating'),
	}),
})
