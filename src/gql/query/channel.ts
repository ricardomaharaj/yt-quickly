import { GQL_API } from '~/type/graphql-api'
import { YouTube_API } from '~/type/youtube-api'
import { builder } from '../builder'
import { ytFetch } from '../util/yt-fetch'

builder.queryFields((t) => ({
	channelVideos: t.field({
		type: 'PlaylistItemsResponse',
		args: {
			channelId: t.arg.string({ required: true }),
			pageToken: t.arg.string(),
		},
		resolve: async (_, args) => {
			const channelParams = new URLSearchParams({
				part: 'contentDetails',
				id: args.channelId,
			})

			const channelRes = await ytFetch<YouTube_API.ChannelListResponse>(
				'/channels',
				channelParams,
			)

			const channel = channelRes?.items?.at(0)
			const uploadsPlaylist = channel?.contentDetails?.relatedPlaylists?.uploads

			if (!uploadsPlaylist) throw new Error()

			const playlistParams = new URLSearchParams({
				part: 'snippet',
				playlistId: uploadsPlaylist,
				maxResults: '50',
			})

			if (args.pageToken) playlistParams.append('pageToken', args.pageToken)

			const playlistRes = await ytFetch<YouTube_API.PlaylistItemsResponse>(
				'/playlistItems',
				playlistParams,
			)

			const items: GQL_API.PlaylistItem[] = playlistRes?.items?.map((x) => ({
				channelId: x.snippet.channelId,
				channelTitle: x.snippet.channelTitle,
				description: x.snippet.description,
				playlistId: x.snippet.playlistId,
				position: x.snippet.position,
				publishedAt: x.snippet.publishedAt,
				thumbnails: x.snippet.thumbnails,
				title: x.snippet.title,
				videoId: x.snippet.resourceId.videoId,
				videoOwnerChannelId: x.snippet.videoOwnerChannelId,
				videoOwnerChannelTitle: x.snippet.videoOwnerChannelTitle,
			}))

			const data: GQL_API.PlaylistItemsResponse = {
				nextPageToken: playlistRes.nextPageToken,
				prevPageToken: playlistRes.prevPageToken,
				items: items,
			}

			return data
		},
	}),
}))
