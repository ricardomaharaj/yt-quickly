import { graphql } from 'gql.tada'
import { useAtom } from 'jotai'
import { useQuery } from 'urql'
import { channelIdAtom } from '~/app/atom/channel-id-atom'
import { tabAtom } from '~/app/atom/tab-atom'
import { videoIdAtom } from '~/app/atom/video-id-atom'
import { Icon } from '~/app/const/icon'
import { Tab } from '~/app/const/tab'

const VIDEO_QUERY = graphql(`
	query ($id: String!) {
		video(id: $id) {
			channelId
			channelTitle
			description
			publishedAt
			title
			commentCount
			likeCount
			viewCount
		}
	}
`)

export function InfoPane() {
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [tab, setTab] = useAtom(tabAtom)

	const [res] = useQuery({
		query: VIDEO_QUERY,
		variables: { id: videoId },
	})

	const vid = res?.data?.video

	if (!vid?.title) return <></>

	return (
		<>
			<div className='col bg-surface p-4 max-h-[800px] overflow-scroll'>
				<div className='row'>
					<div className='text-xl line-clamp-2'>{vid?.title}</div>
				</div>

				<button
					className='row'
					onClick={() => {
						setChannelId(vid?.channelId || '')
						setTab(Tab.CHANNEL)
					}}
				>
					<div className='line-clamp-1'>{vid?.channelTitle}</div>
				</button>

				<div className='my-2' />

				<div className='row gap-2 items-center'>
					<i className={`${Icon.CLOCK}`} />
					<div>{vid?.publishedAt?.substring(0, 10)}</div>
				</div>

				<div className='row gap-2 items-center'>
					<i className={`${Icon.EYE}`} />
					<div>{vid?.viewCount}</div>
				</div>

				<div className='row gap-2 items-center'>
					<i className={`${Icon.LIKE}`} />
					<div>{vid?.likeCount}</div>
				</div>

				<div className='row gap-2 items-center'>
					<i className={`${Icon.COMMENT}`} />
					<div>{vid?.commentCount}</div>
				</div>

				<div className='my-2' />

				<div className='flex flex-wrap whitespace-pre-wrap wrap-anywhere'>
					{vid?.description}
				</div>
			</div>
		</>
	)
}
