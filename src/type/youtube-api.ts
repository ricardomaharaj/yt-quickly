export namespace YouTube_API {
	/* THUMBNAILS */
	export type Thumbnail = {
		url: string
	}

	export type Thumbnails = {
		default: Thumbnail
		high: Thumbnail
		maxres: Thumbnail
		medium: Thumbnail
		standard: Thumbnail
	}

	/* SEARCH */
	export type SearchResult = {
		kind: 'youtube#searchResult'
		id: {
			channelId: string
			kind: string
			playlistId: string
			videoId: string
		}
		snippet: {
			channelId: string
			channelTitle: string
			description: string
			liveBroadcastContent: string
			publishedAt: string
			thumbnails: Thumbnails
			title: string
		}
	}

	export type SearchListResponse = {
		kind: 'youtube#searchListResponse'
		nextPageToken: string
		prevPageToken: string
		items: SearchResult[]
	}

	/* COMMENT */
	export type Comment = {
		kind: 'youtube#comment'
		id: string
		snippet: {
			authorChannelId: { value: string }
			authorChannelUrl: string
			authorDisplayName: string
			authorProfileImageUrl: string
			channelId: string
			likeCount: string
			moderationStatus: string
			parentId: string
			publishedAt: string
			textDisplay: string
			updatedAt: string
			viewerRating: string
		}
	}

	export type CommentThread = {
		kind: 'youtube#commentThread'
		id: string
		snippet: {
			canReply: boolean
			channelId: string
			isPublic: boolean
			topLevelComment: Comment
			totalReplyCount: string
			videoId: string
		}
	}

	export type CommentThreadListResponse = {
		kind: 'youtube#commentThreadListResponse'
		items: CommentThread[]
	}

	/* VIDEO */
	export type Video = {
		kind: 'youtube#video'
		id: string
		snippet: {
			categoryId: string
			channelId: string
			channelTitle: string
			defaultAudioLanguage: string
			defaultLanguage: string
			description: string
			liveBroadcastContent: string
			publishedAt: string
			tags: string[]
			thumbnails: YouTube_API.Thumbnails
			title: string
		}
		statistics: {
			commentCount: string
			dislikeCount: string
			favoriteCount: string
			likeCount: string
			viewCount: string
		}
	}

	export type VideoListResponse = {
		kind: 'youtube#videoListResponse'
		nextPageToken: string
		prevPageToken: string
		items: Video[]
	}

	/* CHANNEL */
	export type Channel = {
		kind: 'youtube#channel'
		id: string
		snippet: {
			country: string
			customUrl: string
			defaultLanguage: string
			description: string
			publishedAt: string
			thumbnails: Thumbnails
			title: string
		}
		contentDetails: {
			relatedPlaylists: {
				favorites: string
				likes: string
				uploads: string
			}
		}
	}

	export type ChannelListResponse = {
		kind: 'youtube#channelListResponse'
		nextPageToken: string
		prevPageToken: string
		items: Channel[]
	}

	/* PLAYLIST */
	export type PlaylistItem = {
		kind: 'youtube#playlistItem'
		id: string
		snippet: {
			channelId: string
			channelTitle: string
			description: string
			playlistId: string
			position: string
			publishedAt: string
			thumbnails: Thumbnails
			title: string
			videoOwnerChannelId: string
			videoOwnerChannelTitle: string
			resourceId: {
				kind: string
				videoId: string
			}
		}
	}

	export type PlaylistItemsResponse = {
		kind: 'youtube#playlistItemListResponse'
		nextPageToken: string
		prevPageToken: string
		items: PlaylistItem[]
	}
}
