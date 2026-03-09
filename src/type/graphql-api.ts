export namespace GQL_API {
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
		thumbnailUrl?: string
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
		channelId?: string
		likeCount?: string
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
		thumbnailUrl?: string
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

	/* CHANNEL */
	export type Channel = {
		// SNIPPET
		country?: string
		customUrl?: string
		defaultLanguage?: string
		description?: string
		publishedAt?: string
		thumbnailUrl?: string
		title?: string

		// CONTENT DETAILS
		uploadsPlaylist?: string
	}

	/* PLAYLIST */
	export type PlaylistItem = {
		// SNIPPET
		channelId?: string
		channelTitle?: string
		description?: string
		playlistId?: string
		position?: string
		publishedAt?: string
		thumbnailUrl?: string
		title?: string
		videoId?: string
		videoOwnerChannelId?: string
		videoOwnerChannelTitle?: string
	}

	export type PlaylistItemsResponse = {
		nextPageToken?: string
		prevPageToken?: string
		items: PlaylistItem[]
	}
}
