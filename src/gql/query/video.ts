import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	video: t.field({
		type: 'Video',
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			const params = new URLSearchParams({
				part: 'snippet,statistics',
				id: args.id,
			})

			const res = await ytFetch<YouTube_API.VideoListResponse>(
				'/videos',
				params,
			)

			const vid = res?.items?.at(0)

			const data: GQL_API.Video = {
				// SNIPPET
				categoryId: vid?.snippet.categoryId,
				channelId: vid?.snippet.channelId,
				channelTitle: vid?.snippet.channelTitle,
				defaultAudioLanguage: vid?.snippet.defaultAudioLanguage,
				defaultLanguage: vid?.snippet.defaultLanguage,
				description: vid?.snippet.description,
				liveBroadcastContent: vid?.snippet.liveBroadcastContent,
				publishedAt: vid?.snippet.publishedAt,
				tags: vid?.snippet.tags,
				thumbnails: vid?.snippet.thumbnails,
				title: vid?.snippet.title,

				// STATS
				commentCount: vid?.statistics.commentCount,
				dislikeCount: vid?.statistics.dislikeCount,
				favoriteCount: vid?.statistics.favoriteCount,
				likeCount: vid?.statistics.likeCount,
				viewCount: vid?.statistics.viewCount,
			}

			return data
		},
	}),
}))
