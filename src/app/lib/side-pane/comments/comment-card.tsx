import { useState } from 'preact/hooks'
import { Icon } from '~/app/const/icon'

type Props = {
	author?: string | null
	body?: string | null
	likeCount?: string | null
	publishedAt?: string | null
}

export function CommentCard(props: Props) {
	const [expanded, setExpanded] = useState(true)

	return (
		<>
			<div
				className='col bg-surface p-4'
				onClick={() => setExpanded(!expanded)}
			>
				<div className='row gap-2 items-center'>
					<i className={`${Icon.CLOCK}`} />
					<div>{props.publishedAt?.substring(0, 10)}</div>
				</div>

				<div className='row gap-2 items-center'>
					<i className={`${Icon.LIKE}`} />
					<div>{props.likeCount?.toLocaleString()}</div>
				</div>

				<div className='row gap-2 items-center'>
					<i className={`${Icon.ACCOUNT}`} />
					<div className='line-clamp-1'>{props.author}</div>
				</div>

				<div className='my-2' />

				<div
					className={`whitespace-pre-wrap ${expanded ? '' : 'line-clamp-1'}`}
				>
					{props.body}
				</div>
			</div>
		</>
	)
}
