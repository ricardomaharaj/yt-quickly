import { graphql } from 'gql.tada'
import { useAtom } from 'jotai'
import { useQuery } from 'urql'
import { channelIdAtom } from '~/app/atom/channel-id-atom'
import { channelPageAtom } from '~/app/atom/channel-page-atom'
import { videoIdAtom } from '~/app/atom/video-id-atom'
import { Pager } from '~/app/lib/pager'
import { VideoCard } from '~/app/lib/ui/video-card'

const CHANNEL_VIDEOS_QUERY = graphql(`
  query ($channelId: String!, $pageToken: String!) {
    channelVideos(channelId: $channelId, pageToken: $pageToken) {
      nextPageToken
      prevPageToken
      items {
        title
        videoId
        thumbnails {
          default {
            url
          }
        }
      }
    }
  }
`)

export function ChannelPane() {
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [pageToken, setPageToken] = useAtom(channelPageAtom)

	const [res] = useQuery({
		query: CHANNEL_VIDEOS_QUERY,
		variables: {
			channelId: channelId,
			pageToken: pageToken,
		},
	})

	const nextPageToken = res?.data?.channelVideos?.nextPageToken
	const prevPageToken = res?.data?.channelVideos?.prevPageToken

	const vids = res?.data?.channelVideos?.items

	return (
		<>
			<div className='col max-h-[750px] overflow-scroll'>
				<div className='grid grid-cols-3 gap-2'>
					{vids?.map((x) => (
						<VideoCard
							img={x.thumbnails?.default?.url}
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
