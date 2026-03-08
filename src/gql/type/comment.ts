import { builder } from '../builder'

builder.objectType('Comment', {
	fields: (t) => ({
		// SNIPPET
		authorChannelId: t.exposeString('authorChannelId'),
		authorChannelUrl: t.exposeString('authorChannelUrl'),
		authorDisplayName: t.exposeString('authorDisplayName'),
		authorProfileImageUrl: t.exposeString('authorProfileImageUrl'),
		canRate: t.exposeBoolean('canRate'),
		channelId: t.exposeString('channelId'),
		likeCount: t.exposeFloat('likeCount'),
		moderationStatus: t.exposeString('moderationStatus'),
		parentId: t.exposeString('parentId'),
		publishedAt: t.exposeString('publishedAt'),
		textDisplay: t.exposeString('textDisplay'),
		updatedAt: t.exposeString('updatedAt'),
		viewerRating: t.exposeString('viewerRating'),
	}),
})
