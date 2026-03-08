import { useAtom } from 'jotai'
import { tabAtom } from '~/app/atom/tab-atom'
import { TAB_ICONS, Tab } from '~/app/const/tab'

const TABS: Tab[] = [Tab.INFO, Tab.COMMENTS, Tab.CHANNEL, Tab.SEARCH]

export function Taber() {
	const [tab, setTab] = useAtom(tabAtom)

	return (
		<>
			<div className='row gap-2 w-full justify-evenly'>
				{TABS.map((x) => (
					<button
						className='row w-full justify-center py-4 bg-surface'
						title={x}
						onClick={() => setTab(x)}
					>
						<i className={`${TAB_ICONS[x]} text-2xl`} />
					</button>
				))}
			</div>
		</>
	)
}
