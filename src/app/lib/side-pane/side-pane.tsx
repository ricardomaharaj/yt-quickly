import { useAtom } from 'jotai'
import { tabAtom } from '~/app/atom/tab-atom'
import { Tab } from '~/app/const/tab'
import { ChannelPane } from './channel/channel-pane'
import { CommentsPane } from './comments/comments-pane'
import { InfoPane } from './info/info-pane'
import { SearchPane } from './search/search-pane'
import { Taber } from './taber'

export function SidePane() {
	const [tab, setTab] = useAtom(tabAtom)

	return (
		<>
			<div className='col w-full gap-2'>
				<Taber />

				{tab === Tab.INFO && <InfoPane />}
				{tab === Tab.COMMENTS && <CommentsPane />}
				{tab === Tab.CHANNEL && <ChannelPane />}
				{tab === Tab.SEARCH && <SearchPane />}
			</div>
		</>
	)
}
