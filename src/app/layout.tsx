import { SidePane } from './lib/side-pane/side-pane'
import { YT_Player } from './lib/yt-player'

export function Layout() {
	return (
		<>
			<div className='col'>
				<div className='row w-full gap-2'>
					<YT_Player />

					<SidePane />
				</div>
			</div>
		</>
	)
}
