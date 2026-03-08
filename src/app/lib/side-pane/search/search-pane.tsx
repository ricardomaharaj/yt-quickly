import { useDebouncedCallback } from '@mantine/hooks'
import { graphql } from 'gql.tada'
import { useAtom } from 'jotai'
import { useQuery } from 'urql'
import { channelIdAtom } from '~/app/atom/channel-id-atom'
import { searchPageAtom } from '~/app/atom/search-page-atom'
import { searchQueryAtom } from '~/app/atom/search-query-atom'
import { tabAtom } from '~/app/atom/tab-atom'
import { videoIdAtom } from '~/app/atom/video-id-atom'
import { Pager } from '~/app/lib/pager'
import { VideoCard } from '~/app/lib/ui/video-card'

const SEARCH_QUERY = graphql(`
	query ($q: String!, $pageToken: String) {
		search(q: $q, pageToken: $pageToken) {
			nextPageToken
			prevPageToken
			items {
				channelId
				channelTitle
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

export function SearchPane() {
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
	const [tab, setTab] = useAtom(tabAtom)
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [pageToken, setPageToken] = useAtom(searchPageAtom)

	const [res] = useQuery({
		query: SEARCH_QUERY,
		variables: {
			q: searchQuery,
			pageToken: pageToken,
		},
	})

	const updateSearchQuery = useDebouncedCallback((val?: string) => {
		if (!val) {
			setSearchQuery('')
			setPageToken('')
		} else {
			setSearchQuery(val)
		}
	}, 800)

	const nextPageToken = res.data?.search?.nextPageToken
	const prevPageToken = res.data?.search?.prevPageToken

	const vids = res?.data?.search?.items

	return (
		<>
			<div className='col'>
				<input
					className='bg-surface text-xl p-3'
					defaultValue={searchQuery}
					onChange={(e) => updateSearchQuery(e.currentTarget.value)}
					placeholder='Search'
					title='Search'
					type='text'
				/>
			</div>

			<div className='col max-h-[700px] overflow-scroll'>
				<div className='grid grid-cols-3 gap-2'>
					{vids?.map((x) => (
						<VideoCard
							img={x.thumbnails?.default?.url}
							pri={x.title}
							sec={x.channelTitle}
							onClick={() => {
								setVideoId(x.videoId || '')
								setChannelId(x.channelId || '')
							}}
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
