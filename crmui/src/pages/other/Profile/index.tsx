import { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import Chart, { type ChartItem } from 'chart.js/auto'

// components
import { PopoverLayout } from '../../../components/HeadlessUI'
import { PageBreadcrumb } from '../../../components'
import Collapse from '@/components/FrostUI/Collapse/index'
import TaskSection from '@/pages/apps/Tasks/TasksList/Section'
import Task from '@/pages/apps/Tasks/TasksDetails/Task'
//image
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'

// dummy data
import { experienceData, messages, productConfig, projectTableData } from './data'

const ProfilePages = () => {
	const PopoverToggle = () => <i className="ri-more-2-fill" />
	

	useEffect(() => {
		const productTag = document.getElementById('high-performing-product') as ChartItem
		const chart = new Chart(productTag, productConfig)

		return () => {
			chart.destroy()
		}
	}, [])
	const [cardAccordion, setCardAccordion] = useState<number | null>(0)

	const handleCardAccordion = (index: number) => () => {
		if (index === cardAccordion) setCardAccordion(null)
		else setCardAccordion(index)
	}
	return (
		<>
			<PageBreadcrumb title="Profile" subName="Extra Pages" />
			<div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1 gap-6">
				<div className="xl:col-span-4 lg:col-span-1">
					<div className="card text-center p-6 mb-6">
						<img src={avatar1} alt="" className="w-24 rounded-full p-1 border border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 mx-auto" />
						<h4 className="mb-1 mt-3 text-lg">Tosha Minner</h4>
						<p className="text-gray-400 mb-4">Founder</p>
						<div className="flex flex-wrap gap-1 justify-center">
							<button type="button" className="btn bg-success btn-sm !text-sm text-white mb-3">
								Follow
							</button>
							<button type="button" className="btn bg-danger btn-sm !text-sm text-white mb-3">
								Message
							</button>
						</div>
						<div className="text-start mt-6">
							<h4 className="text-sm uppercase mb-2.5">About Me :</h4>
							<p className="text-gray-400 mb-6">Hi I'm Tosha Minner,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
							<p className="text-zinc-400 mb-3">
								<strong>Full Name :</strong> <span className="ms-2">Tosha K. Minner</span>
							</p>
							<p className="text-zinc-400 mb-3">
								<strong>Mobile :</strong>
								<span className="ms-2">(123) 123 1234</span>
							</p>
							<p className="text-zinc-400 mb-3">
								<strong>Email :</strong> <span className="ms-2 ">user@email.domain</span>
							</p>
							<p className="text-zinc-400 mb-1.5">
								<strong>Location :</strong> <span className="ms-2">USA</span>
							</p>
						</div>

						<ul className="social-list list-inline mt-6 ">
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-primary text-primary">
									<i className="ri-facebook-circle-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-danger text-danger">
									<i className="ri-google-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-info text-info">
									<i className="ri-twitter-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-secondary text-secondary">
									<i className="ri-github-fill"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="xl:col-span-5 lg:col-span-2">
					<div className="card p-6">
						<div className="grid xl:grid-cols-3">
							<div className="xl:col-span-2 w-full px-6">
								<div className="flex justify-between items-center my-6">
									<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">Tasks</h4>
									{/* <div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
										<div className="static overflow-y-hidden">
											<form>
												<div className="relative">
													<input type="text" className="form-input border border-dark/10 ps-8" placeholder="Search files..." />
													<span className="ri-search-line absolute text-base leading-9 left-2.5 top-0"></span>
												</div>
											</form>
										</div>
									</div> */}
								</div>
								{/* <TaskSection ></TaskSection>
								<TaskSection ></TaskSection>
								<TaskSection ></TaskSection> */}
							</div>
							<div className="col-span-1">
								{/* <Task  /> */}
							</div>
						</div>
					</div>
					<div className="card p-6 mt-6">
						<div className="grid xl:grid-cols-3">
							<div className="xl:col-span-2 w-full px-6">
								<div className="flex justify-between items-center my-6">
									<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">Tasks</h4>
									{/* <div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
										<div className="static overflow-y-hidden">
											<form>
												<div className="relative">
													<input type="text" className="form-input border border-dark/10 ps-8" placeholder="Search files..." />
													<span className="ri-search-line absolute text-base leading-9 left-2.5 top-0"></span>
												</div>
											</form>
										</div>
									</div> */}
								</div>
								{/* <TaskSection ></TaskSection>
								<TaskSection ></TaskSection>
								<TaskSection ></TaskSection> */}
							</div>
							
						</div>
					</div>
					<div className="card p-6 mt-6">
						<div className="grid xl:grid-cols-3">
							<div className="xl:col-span-2 w-full px-6">
								<div className="flex justify-between items-center my-6">
									<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">Tasks</h4>
									{/* <div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
										<div className="static overflow-y-hidden">
											<form>
												<div className="relative">
													<input type="text" className="form-input border border-dark/10 ps-8" placeholder="Search files..." />
													<span className="ri-search-line absolute text-base leading-9 left-2.5 top-0"></span>
												</div>
											</form>
										</div>
									</div> */}
								</div>
								{/* <TaskSection ></TaskSection>
								<TaskSection ></TaskSection>
								<TaskSection ></TaskSection> */}
							</div>
						
						</div>
					</div>
					<div className="card p-6 mt-6">
						<div className="grid xl:grid-cols-3">
							<div className="xl:col-span-2 w-full px-6">
								<div className="flex justify-between items-center my-6">
									<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">Tasks</h4>
									{/* <div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
										<div className="static overflow-y-hidden">
											<form>
												<div className="relative">
													<input type="text" className="form-input border border-dark/10 ps-8" placeholder="Search files..." />
													<span className="ri-search-line absolute text-base leading-9 left-2.5 top-0"></span>
												</div>
											</form>
										</div>
									</div> */}
								</div>
								{/* <TaskSection ></TaskSection>
								<TaskSection ></TaskSection>
								<TaskSection ></TaskSection> */}
							</div>
							
						</div>
					</div>
				</div>
				<div className="xl:col-span-3 lg:col-span-1">
				<div className="card">
							<Collapse open={cardAccordion === 0} toggleCollapse={handleCardAccordion(0)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #1
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>
								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
										<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>

						<div className="card">
							<Collapse open={cardAccordion === 1} toggleCollapse={handleCardAccordion(1)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #2
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>
								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>

						<div className="card">
							<Collapse open={cardAccordion === 2} toggleCollapse={handleCardAccordion(2)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #3
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>

								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>
						<div className="card">
							<Collapse open={cardAccordion === 3} toggleCollapse={handleCardAccordion(3)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #4
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>

								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>
						<div className="card">
							<Collapse open={cardAccordion === 4} toggleCollapse={handleCardAccordion(4)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #5
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>

								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>
						<div className="card">
							<Collapse open={cardAccordion === 5} toggleCollapse={handleCardAccordion(5)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #6
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>

								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>
						
				</div>
</div>

		</>
	)
}

export default ProfilePages
