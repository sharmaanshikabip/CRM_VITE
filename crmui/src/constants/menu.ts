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
		url: '/analytics',
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
				url: '/ecommerce',
				icon: 'ri-line-chart-line',
			}
		],
	},
	{
		key: 'contacts',
		label: 'Contacts',
		url: '/apps/email/inbox',
		icon: 'ri-contacts-fill',
	},
	{
		key: 'companies',
		label: 'Companies',
		url: '/company',
		icon: 'ri-building-2-fill',
	},
	{
		key: 'deals',
		label: 'Deals',
		url: '/apps/email/read',
		icon: 'ri-hand-coin-fill',
	},
	{
		key: 'tickets',
		label: 'Tickets',
		url: '/company/:id',
		icon: 'ri-bug-fill',
	},
	{
		key: 'leads',
		label: 'Leads',
		url: '/company',
		icon: 'ri-award-fill',
	}
]

export { MENU_ITEMS }
