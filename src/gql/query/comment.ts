import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	comments: t.field({
		type: ['Comment'],
		args: {
			videoId: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			const params = new URLSearchParams({
				part: 'snippet',
				videoId: args.videoId,
				maxResults: '24',
				order: 'relevance',
				textFormat: 'plainText',
			})

			const res = await ytFetch<YouTube_API.CommentThreadListResponse>(
				'/commentThreads',
				params,
			)

			const data: GQL_API.Comment[] = res?.items?.map((x) => ({
				authorChannelId:
					x.snippet.topLevelComment.snippet.authorChannelId.value,
				authorChannelUrl: x.snippet.topLevelComment.snippet.authorChannelUrl,
				authorDisplayName: x.snippet.topLevelComment.snippet.authorDisplayName,
				authorProfileImageUrl:
					x.snippet.topLevelComment.snippet.authorProfileImageUrl,
				canRate: x.snippet.topLevelComment.snippet.canRate,
				channelId: x.snippet.topLevelComment.snippet.channelId,
				likeCount: x.snippet.topLevelComment.snippet.likeCount,
				moderationStatus: x.snippet.topLevelComment.snippet.moderationStatus,
				parentId: x.snippet.topLevelComment.snippet.parentId,
				publishedAt: x.snippet.topLevelComment.snippet.publishedAt,
				textDisplay: x.snippet.topLevelComment.snippet.textDisplay,
				updatedAt: x.snippet.topLevelComment.snippet.updatedAt,
				viewerRating: x.snippet.topLevelComment.snippet.viewerRating,
			}))

			return data
		},
	}),
}))
