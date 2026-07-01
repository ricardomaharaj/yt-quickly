type Props = {
	img?: string | null
	pri?: string | null
	sec?: string | null
	onImgClick?: () => void
	onPriClick?: () => void
	onSecClick?: () => void
}

export function VideoCard(props: Props) {
	return (
		<>
			<button
				className="col bg-surface"
				title={props.pri || ""}
				type="button"
				onClick={(e) => e.preventDefault()}
			>
				<div
					className="aspect-video bg-center bg-cover"
					style={{ backgroundImage: `url(${props.img})` }}
					onClick={props.onImgClick}
				/>

				{props.pri && (
					<div className="line-clamp-1 text-start" onClick={props.onPriClick}>
						{props.pri}
					</div>
				)}

				{props.sec && (
					<div className="line-clamp-1 text-start" onClick={props.onSecClick}>
						{props.sec}
					</div>
				)}
			</button>
		</>
	)
}
