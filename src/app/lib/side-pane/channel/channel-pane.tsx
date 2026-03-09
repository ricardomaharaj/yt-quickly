import { graphql } from 'gql.tada'
import { useAtom } from 'jotai'
import { useQuery } from 'urql'
import { channelIdAtom } from '~/app/atom/channel-id-atom'
import { channelPageAtom } from '~/app/atom/channel-page-atom'
import { videoIdAtom } from '~/app/atom/video-id-atom'
import { Pager } from '~/app/lib/pager'
import { VideoCard } from '~/app/lib/ui/video-card'

const CHANNEL_QUERY = graphql(`
	query ($channelId: String!) {
		channel(channelId: $channelId) {
			uploadsPlaylist
		}
	}
`)

const UPLOADS_QUERY = graphql(`
	query ($playlistId: String!, $pageToken: String) {
		playlist(playlistId: $playlistId, pageToken: $pageToken) {
			nextPageToken
			prevPageToken
			items {
				thumbnailUrl
				title
				videoId
			}
		}
	}
`)

export function ChannelPane() {
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [pageToken, setPageToken] = useAtom(channelPageAtom)

	const [channelRes] = useQuery({
		query: CHANNEL_QUERY,
		variables: {
			channelId: channelId,
		},
	})

	const playlistId = channelRes.data?.channel?.uploadsPlaylist

	const [uploadsRes] = useQuery({
		query: UPLOADS_QUERY,
		variables: {
			playlistId: playlistId!,
			pageToken: pageToken,
		},
	})

	const playlist = uploadsRes.data?.playlist

	const nextPageToken = playlist?.nextPageToken
	const prevPageToken = playlist?.prevPageToken

	const vids = playlist?.items

	return (
		<>
			<div className='col max-h-[750px] overflow-scroll'>
				<div className='grid grid-cols-3 gap-2'>
					{vids?.map((x) => (
						<VideoCard
							img={x.thumbnailUrl}
							pri={x.title}
							onClick={() => setVideoId(x.videoId || '')}
						/>
					))}
				</div>
			</div>

			{vids?.length ? (
				<Pager
					onPageLeft={() => setPageToken(prevPageToken || '')}
					onPageRight={() => setPageToken(nextPageToken || '')}
				/>
			) : null}
		</>
	)
}
