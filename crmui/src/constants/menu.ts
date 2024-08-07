export interface MenuItemTypes {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
	url?: string
	badge?: {
		variant: string
		text: string
	}
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'home',
		label: 'Home',
		url: '/home',
		icon: 'ri-home-office-fill',
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		isTitle: false,
		icon: 'ri-dashboard-fill',
		children: [
			{
				key: 'snapshot',
				label: 'Snapshot',
				url: '/snapshot',
				icon: 'ri-line-chart-line',
			}
		],
	},
	{
		key: 'Contacts',
		label: 'Contacts',
		url: '/contact',
		icon: 'ri-contacts-fill',
	},
	{
		key: 'Companies',
		label: 'Companies',
		url: '/company',
		icon: 'ri-building-2-fill',
	},
	{
		key: 'Deals',
		label: 'Deals',
		url: '/deals',
		icon: 'ri-hand-coin-fill',
	},
	{
		key: 'Tickets',
		label: 'Tickets',
		url: '/ticket',
		icon: 'ri-bug-fill',
	}
]

export { MENU_ITEMS }
