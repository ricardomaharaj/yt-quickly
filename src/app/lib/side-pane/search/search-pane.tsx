import { graphql } from "gql.tada"
import { useAtom } from "jotai"
import { useQuery } from "urql"
import { channelIdAtom } from "~/app/atom/channel-id-atom"
import { searchPageAtom } from "~/app/atom/search-page-atom"
import { searchQueryAtom } from "~/app/atom/search-query-atom"
import { tabAtom } from "~/app/atom/tab-atom"
import { videoIdAtom } from "~/app/atom/video-id-atom"
import { Icon } from "~/app/const/icon"
import { Tab } from "~/app/const/tab"
import { Pager } from "~/app/lib/pager"
import { VideoCard } from "~/app/lib/ui/video-card"

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
				thumbnailUrl
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

	function parseVidKey(str: string) {
		const key = new URL(str).searchParams.get("v")
		return key
	}

	async function handlePaste() {
		const txt = await navigator.clipboard.readText()
		const key = parseVidKey(txt)
		if (key) {
			setVideoId(key)
		}
	}

	const nextPageToken = res.data?.search?.nextPageToken
	const prevPageToken = res.data?.search?.prevPageToken

	const vids = res?.data?.search?.items

	return (
		<>
			<div className="row w-full">
				<input
					className="bg-surface w-full text-xl p-3"
					defaultValue={searchQuery}
					onKeyDown={(e) => {
						const val = e.currentTarget.value
						if (val) {
							if (e.key === "Enter") {
								setSearchQuery(e.currentTarget.value)
							}
						}
					}}
					placeholder="Search"
					title="Search"
					type="text"
				/>
				<button
					className="bg-surface col justify-center px-4"
					title="Paste YouTube Link"
					onClick={handlePaste}
				>
					<i className={`${Icon.CLIPBOARD} text-2xl`} />
				</button>
			</div>

			<div className="col max-h-[700px] overflow-scroll">
				<div className="grid grid-cols-3 gap-2">
					{vids?.map((x) => (
						<VideoCard
							img={x.thumbnailUrl}
							pri={x.title}
							sec={x.channelTitle}
							onImgClick={() => {
								setVideoId(x.videoId || "")
							}}
							onPriClick={() => {
								setVideoId(x.videoId || "")
							}}
							onSecClick={() => {
								setChannelId(x.channelId || "")
								setTab(Tab.CHANNEL)
							}}
						/>
					))}
				</div>
			</div>

			{vids?.length ? (
				<Pager
					onPageLeft={() => setPageToken(prevPageToken || "")}
					onPageRight={() => setPageToken(nextPageToken || "")}
				/>
			) : null}
		</>
	)
}
