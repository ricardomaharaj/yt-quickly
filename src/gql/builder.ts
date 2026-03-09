import Builder from '@pothos/core'
import { GQL_API } from '~/type/graphql-api'

type TBuilder = {
	Objects: {
		Channel: GQL_API.Channel
		Comment: GQL_API.Comment
		PlaylistItem: GQL_API.PlaylistItem
		PlaylistItemsResponse: GQL_API.PlaylistItemsResponse
		SearchResponse: GQL_API.SearchResponse
		SearchResult: GQL_API.SearchResult
		Video: GQL_API.Video
		VideoResponse: GQL_API.VideoResponse
	}
}

export const builder = new Builder<TBuilder>({})

builder.queryType({})
