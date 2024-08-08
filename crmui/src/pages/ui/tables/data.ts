// avatar
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'
import { Employee } from './types'

// basic tables
interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	image: string
	cell: string
	activeClass?: string
	url?: string
}

interface ExpandableRecord {
	product: string
	courier: string
	variant: string
	now: number
	status: string
	price: string
	Quantity: string
	Amount: string
}

interface NestedRecords {
	name: string
	phoneNo: string
	dob: string
	country: string
	children?: NestedRecords[]
}

// basic tables
const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',
		image: avatar1,
		cell: 'Cell',
		activeClass: 'bg-gray-50 dark:bg-gray-900',
	},
	{
		id: 2,
		name: 'Ann C. Thompson',
		phoneNo: '646-473-2057',
		dob: 'January 25, 1959',
		country: 'USA',
		accountNo: 'SB646 473 2057',
		image: avatar10,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',
		image: avatar5,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar2,
		cell: 'Cell',
	},
]

const expandablerecords: ExpandableRecord[] = [
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
	{
		product: 'Marco Lightweight Shirt',
		courier: 'DHL',
		variant: 'warning',
		now: 50,
		status: 'Shipped',
		price: '$128.50',
		Quantity: '37',
		Amount: '4,754.50',
	},
	{
		product: 'Half Sleeve Shirt',
		courier: 'Bright',
		variant: 'info',
		now: 25,
		status: 'Order Received',
		price: '$39.99',
		Quantity: '64',
		Amount: '2,559.36',
	},
	{
		product: 'Lightweight Jacket',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$20.00',
		Quantity: '184',
		Amount: '3,680.00',
	},
	{
		product: 'Cargo Pant & Shirt',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$28.49',
		Quantity: '69',
		Amount: '1,965.81',
	},
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
]

const nestedrecords: NestedRecords[] = [
	{
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'india',
		children: [
			{
				name: 'Risa D. Pearson',
				phoneNo: '336-508-2157',
				dob: 'July 24, 1950',
				country: 'india',
			},
			{
				name: 'Ann C. Thompson',
				phoneNo: '646-473-2057',
				dob: 'January 25, 1959',
				country: 'Canada',
			},
		],
	},
	{
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'September 2, 1939',
		country: 'Belgium',
	},
]

const dataTableRecords: Employee[] = [
	{
		id: 1,
		companyName: 'Jonathan',
		companyDetailLink:'Jonathan_details',
		companyOwner: 'jonathan@example.com',
		createDate: 'Senior Implementation Architect',
		phoneNumber: 'Hauck Inc',
		lastActivityDate: 'Holy See',
	},
	{
		id: 2,
		companyName: 'Jon',
		companyDetailLink:'Jon_details',
		companyOwner: 'jon@example.com',
		createDate: 'Senior Implementation Architect',
		phoneNumber: 'Hauck Inc',
		lastActivityDate: 'Holy See',
	},
	{
		id: 3,
		companyName: 'Shannon',
		companyDetailLink:'Shannon_details',
		companyOwner: 'shannon@example.com',
		createDate: 'Senior Implementation Architect',
		phoneNumber: 'Hauck Inc',
		lastActivityDate: 'Holy See',
	},
	{
		id: 4,
		companyName: 'Robert',
		companyDetailLink:'Robert_details',
		companyOwner: 'shannon@example.com',
		createDate: 'Senior Implementation Architect',
		phoneNumber: 'Hauck Inc',
		lastActivityDate: 'Holy See',
	},
	{
		id: 5,
		companyName: 'Noel',
		companyDetailLink:'Noel_details',
		companyOwner: 'shannon@example.com',
		createDate: 'Senior Implementation Architect',
		phoneNumber: 'Hauck Inc',
		lastActivityDate: 'Holy See',
	},
	{
		id: 6,
		name: 'Traci',
		email: 'traci@example.com',
		position: 'Corporate Identity Director',
		company: 'Koelpin - Goldner',
		country: 'Vanuatu',
	},
	{
		id: 7,
		name: 'Kerry',
		email: 'kerry@example.com',
		position: 'Lead Applications Associate',
		company: 'Feeney, Langworth and Tremblay',
		country: 'Niger',
	},
	{
		id: 8,
		name: 'Patsy',
		email: 'patsy@example.com',
		position: 'Dynamic Assurance Director',
		company: 'Streich Group',
		country: 'Niue',
	},
	{
		id: 9,
		name: 'Cathy',
		email: 'cathy@example.com',
		position: 'Customer Data Director',
		company: 'Ebert, Schamberger and Johnston',
		country: 'Mexico',
	},
	{
		id: 10,
		name: 'Tyrone',
		email: 'tyrone@example.com',
		position: 'Senior Response Liaison',
		company: 'Raynor, Rolfson and Daugherty',
		country: 'Qatar',
	},
]
const dataTableContactRecords: Employee[] = [
	{
		id: 1,
		companyName: 'Jonathan',
		email: 'jonathan@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 2,
		companyName: 'Jon',
		email: 'jonathan@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 3,
		companyName: 'Shannon',
		email: 'shannon@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 4,
		companyName: 'Robert',
		email: 'shannon@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 5,
		companyName: 'Noel',
		email: 'shannon@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 6,
		name: 'Traci',
		email: 'traci@example.com',
		phoneNumber: 'Hauck Inc',
		contactOwner: 'Holy See',
		primaryCompany:'Holy See',
	},
	{
		id: 7,
		name: 'Kerry',
		email: 'kerry@example.com',
		position: 'Lead Applications Associate',
		company: 'Feeney, Langworth and Tremblay',
		country: 'Niger',
	},
	{
		id: 8,
		name: 'Patsy',
		email: 'patsy@example.com',
		position: 'Dynamic Assurance Director',
		company: 'Streich Group',
		country: 'Niue',
	},
	{
		id: 9,
		name: 'Cathy',
		email: 'cathy@example.com',
		position: 'Customer Data Director',
		company: 'Ebert, Schamberger and Johnston',
		country: 'Mexico',
	},
	{
		id: 10,
		name: 'Tyrone',
		email: 'tyrone@example.com',
		position: 'Senior Response Liaison',
		company: 'Raynor, Rolfson and Daugherty',
		country: 'Qatar',
	},
]


export { records, expandablerecords, nestedrecords, dataTableRecords,dataTableContactRecords }
