import { Icon } from '~/app/const/icon'

type Props = {
	onPageLeft?: () => void
	onPageRight?: () => void
}

export function Pager(props: Props) {
	return (
		<>
			<div className='row gap-2 w-full'>
				<button
					className='row w-full justify-center py-4 bg-surface'
					onClick={props.onPageLeft}
				>
					<i className={`${Icon.ARROW_LEFT} text-2xl`} />
				</button>

				<button
					className='row w-full justify-center py-4 bg-surface'
					onClick={props.onPageRight}
				>
					<i className={`${Icon.ARROW_RIGHT} text-2xl`} />
				</button>
			</div>
		</>
	)
}
