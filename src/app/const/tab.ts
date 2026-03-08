import { Icon } from './icon'

export enum Tab {
	CHANNEL = 'CHANNEL',
	COMMENTS = 'COMMENTS',
	INFO = 'INFO',
	SEARCH = 'SEARCH',
}

export const TAB_ICONS: Record<Tab, Icon> = {
	[Tab.CHANNEL]: Icon.ACCOUNT,
	[Tab.COMMENTS]: Icon.COMMENT,
	[Tab.INFO]: Icon.INFO,
	[Tab.SEARCH]: Icon.SEARCH,
}
