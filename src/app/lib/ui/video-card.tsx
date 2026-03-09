type Props = {
	img?: string | null
	pri?: string | null
	sec?: string | null
	onClick?: () => void
}

export function VideoCard(props: Props) {
	return (
		<>
			<button
				className='col bg-surface'
				onClick={props.onClick}
				title={props.pri || ''}
			>
				<div
					className='aspect-video bg-center bg-cover'
					style={{ backgroundImage: `url(${props.img})` }}
				/>

				{props.pri && (
					<div className='line-clamp-1 text-start'>{props.pri}</div>
				)}
				{props.sec && (
					<div className='line-clamp-1 text-start'>{props.sec}</div>
				)}
			</button>
		</>
	)
}
