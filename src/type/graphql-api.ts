export namespace GQL_API {
	/* THUMBNAILS */
	export type Thumbnail = {
		url: string
	}

	export type Thumbnails = {
		default?: Thumbnail
		high?: Thumbnail
		maxres?: Thumbnail
		medium?: Thumbnail
		standard?: Thumbnail
	}

	/* SEARCH */
	export type SearchResult = {
		// ID
		playlistId?: string
		videoId?: string

		// SNIPPET
		channelId?: string
		channelTitle?: string
		description?: string
		liveBroadcastContent?: string
		publishedAt?: string
		thumbnails?: Thumbnails
		title?: string
	}

	export type SearchResponse = {
		nextPageToken?: string
		prevPageToken?: string
		items: SearchResult[]
	}

	/* COMMENT */
	export type Comment = {
		// SNIPPET
		authorChannelId?: string
		authorChannelUrl?: string
		authorDisplayName?: string
		authorProfileImageUrl?: string
		canRate?: boolean
		channelId?: string
		likeCount?: number
		moderationStatus?: string
		parentId?: string
		publishedAt?: string
		textDisplay?: string
		updatedAt?: string
		viewerRating?: string
	}

	/* VIDEO */
	export type Video = {
		// SNIPPET
		categoryId?: string
		channelId?: string
		channelTitle?: string
		defaultAudioLanguage?: string
		defaultLanguage?: string
		description?: string
		liveBroadcastContent?: string
		publishedAt?: string
		tags?: string[]
		thumbnails?: Thumbnails
		title?: string

		// STATS
		commentCount?: string
		dislikeCount?: string
		favoriteCount?: string
		likeCount?: string
		viewCount?: string
	}

	export type VideoResponse = {
		nextPageToken?: string
		prevPageToken?: string
		items: Video[]
	}

	/* PLAYLIST */
	export type PlaylistItem = {
		// SNIPPET
		channelId: string
		channelTitle: string
		description: string
		playlistId: string
		position: number
		publishedAt: string
		thumbnails: Thumbnails
		title: string
		videoId: string
		videoOwnerChannelId: string
		videoOwnerChannelTitle: string
	}

	export type PlaylistItemsResponse = {
		nextPageToken?: string
		prevPageToken?: string
		items: PlaylistItem[]
	}
}
