import Image from "next/image"
import Link from "next/link"

import { HeaderActions } from "./HeaderActions"
import { HeaderMobile } from "./HeaderMobile"
import { HEADER_LINKS } from "./config"

export const Header = () => {
	return (
		<header className='container rounded-3xl !p-4 sm:!p-8 bg-[#fafafa] mt-8 flex items-center justify-between h-[96px]'>
			<HeaderMobile />
			<div className='hidden sm:flex items-center gap-10  lg:flex-1'>
				{HEADER_LINKS.map(link => (
					<Link
						className='hover:opacity-80 transition'
						href={link.href}
						key={link.href}
					>
						{link.title}
					</Link>
				))}
			</div>

			<div className=' lg:flex-1'>
				<Link className='w-fit block' href={"/"}>
					<Image
						alt='logo'
						width={132}
						height={32}
						className='w-20 h-5 sm:w-[132px] sm:h-[32px]'
						src='/images/logo.svg'
					/>
				</Link>
			</div>

			<HeaderActions />
		</header>
	)
}
