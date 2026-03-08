import { useAtom } from 'jotai'
import { videoIdAtom } from '~/app/atom/video-id-atom'

export function YT_Player() {
	const [videoId, setVideoId] = useAtom(videoIdAtom)

	if (!videoId) return <div className='yt-player bg-surface' />

	return (
		<>
			<iframe
				className='yt-player'
				width='1280'
				height='720'
				src={`https://www.youtube.com/embed/${videoId}`}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen
			/>
		</>
	)
}
