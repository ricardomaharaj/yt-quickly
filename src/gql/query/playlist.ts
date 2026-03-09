import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { GQLError } from '../util/gql-errors'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	playlist: t.field({
		type: 'PlaylistItemsResponse',
		args: {
			playlistId: t.arg.string({ required: true }),
			pageToken: t.arg.string(),
		},
		resolve: async (_, args) => {
			if (!args.playlistId) throw GQLError()

			const params = new URLSearchParams({
				maxResults: '50',
				part: 'snippet',
				playlistId: args.playlistId,
			})

			if (args.pageToken) params.append('pageToken', args.pageToken)

			const res = await ytFetch<YouTube_API.PlaylistItemsResponse>(
				`/playlistItems`,
				params,
			)

			const items: GQL_API.PlaylistItem[] = res?.items?.map((x) => ({
				channelId: x.snippet.channelId,
				channelTitle: x.snippet.channelTitle,
				description: x.snippet.description,
				playlistId: x.snippet.playlistId,
				position: x.snippet.position,
				publishedAt: x.snippet.publishedAt,
				thumbnailUrl: x.snippet.thumbnails.default.url,
				title: x.snippet.title,
				videoId: x.snippet.resourceId.videoId,
				videoOwnerChannelId: x.snippet.videoOwnerChannelId,
				videoOwnerChannelTitle: x.snippet.videoOwnerChannelTitle,
			}))

			const data: GQL_API.PlaylistItemsResponse = {
				nextPageToken: res?.nextPageToken,
				prevPageToken: res?.prevPageToken,
				items: items,
			}

			return data
		},
	}),
}))
