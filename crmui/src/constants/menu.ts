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
		key: 'crm',
		label: 'CRM',
		isTitle: false,
		icon: 'ri-shield-user-line',
		children: [
			{
				key: 'Contacts',
				label: 'Contacts',
				url: '/apps/email/inbox',
				parentKey: 'crm',
			},
			{
				key: 'Companies',
				label: 'Companies',
				url: '/ui/tables/data-tables',
				parentKey: 'crm',
			},
			{
				key: 'Deals',
				label: 'Deals',
				url: '/apps/email/read',
				parentKey: 'crm',
			},
			{
				key: 'Tickets',
				label: 'Tickets',
				url: '/apps/email/read',
				parentKey: 'crm',
			},
			{
				key: 'Lists',
				label: 'Lists',
				url: '/apps/email/read',
				parentKey: 'crm',
			},
			{
				key: 'Inbox',
				label: 'Inbox',
				url: '/apps/email/read',
				parentKey: 'crm',
			},
			{
				key: 'Calls',
				label: 'Calls',
				url: '/apps/email/read',
				parentKey: 'crm',
			},
			{
				key: 'Tasks',
				label: 'Tasks',
				url: '/apps/email/read',
				parentKey: 'crm',
			}
		],
	},
]

export { MENU_ITEMS }
