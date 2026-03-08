import { graphql } from 'gql.tada'
import { useAtom } from 'jotai'
import { useQuery } from 'urql'
import { videoIdAtom } from '~/app/atom/video-id-atom'
import { CommentCard } from './comment-card'

const COMMENTS_QUERY = graphql(`
	query ($videoId: String!) {
		comments(videoId: $videoId) {
			authorDisplayName
			likeCount
			publishedAt
			textDisplay
		}
	}
`)

export function CommentsPane() {
	const [videoId, setVideoId] = useAtom(videoIdAtom)

	const [res] = useQuery({
		query: COMMENTS_QUERY,
		variables: { videoId: videoId },
	})

	const comments = res?.data?.comments

	if (!comments?.length) return <></>

	return (
		<>
			<div className='col gap-2 max-h-[800px] overflow-scroll'>
				{comments?.map((x) => (
					<CommentCard
						author={x.authorDisplayName}
						body={x.textDisplay}
						publishedAt={x.publishedAt}
						likeCount={x.likeCount}
					/>
				))}
			</div>
		</>
	)
}
