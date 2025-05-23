import Link from "next/link"

import { DASHBOARD_FOOTER } from "./footer.config"

export const DashboardFooter = () => {
	return (
		<footer className='border-t border-t-[#c0c0bd] pt-4 flex-col vsm:flex-row flex justify-between  pb-14 ml-6 mr-6 md:mr-12 mt-10 sm:mt-[100px]'>
			<p className='text-sm font-light'>© 2025 - kicks Dashboard</p>
			<ul className='flex gap-4'>
				{DASHBOARD_FOOTER.map((link, index) => (
					<li key={index}>
						<Link className='text-sm' href={link.href}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</footer>
	)
}
