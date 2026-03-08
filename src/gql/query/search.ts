import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	search: t.field({
		type: 'SearchResponse',
		args: {
			pageToken: t.arg.string(),
			q: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			const params = new URLSearchParams({
				maxResults: '50',
				part: 'id,snippet',
				q: args.q,
				type: 'video',
			})

			if (args.pageToken) params.append('pageToken', args.pageToken)

			const res = await ytFetch<YouTube_API.SearchListResponse>(
				'/search',
				params,
			)

			const items: GQL_API.SearchResult[] = res?.items?.map((x) => ({
				// ID
				playlistId: x.id.playlistId,
				videoId: x.id.videoId,

				// SNIPPET
				channelId: x.snippet.channelId,
				channelTitle: x.snippet.channelTitle,
				description: x.snippet.description,
				liveBroadcastContent: x.snippet.liveBroadcastContent,
				publishedAt: x.snippet.publishedAt,
				thumbnails: x.snippet.thumbnails,
				title: x.snippet.title,
			}))

			const data: GQL_API.SearchResponse = {
				nextPageToken: res?.nextPageToken,
				prevPageToken: res?.prevPageToken,
				items: items,
			}

			return data
		},
	}),
}))
