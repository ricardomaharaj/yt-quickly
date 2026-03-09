import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { GQLError } from '../util/gql-errors'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	channel: t.field({
		type: 'Channel',
		args: {
			channelId: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			if (!args.channelId) throw GQLError()

			const channelParams = new URLSearchParams({
				id: args.channelId,
				part: 'snippet,contentDetails',
			})

			const channelRes = await ytFetch<YouTube_API.ChannelListResponse>(
				'/channels',
				channelParams,
			)

			const item = channelRes?.items?.at(0)

			const channel: GQL_API.Channel = {
				// SNIPPET
				country: item?.snippet.country,
				customUrl: item?.snippet.customUrl,
				defaultLanguage: item?.snippet.defaultLanguage,
				description: item?.snippet.description,
				publishedAt: item?.snippet.publishedAt,
				thumbnailUrl: item?.snippet.thumbnails.default.url,
				title: item?.snippet.title,

				// CONTENT DETAILS
				uploadsPlaylist: item?.contentDetails.relatedPlaylists.uploads,
			}

			return channel
		},
	}),
}))
