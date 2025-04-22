import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { FOOTER_LINKS } from "./config"
import { cn } from "@/lib/utils"

export const Footer = () => {
	return (
		<>
			<footer className='mt-4 sm:mt-32 container   '>
				<div className=' bg-blue rounded-3xl sm:rounded-[48px]'>
					<div className='p-4 sm:pt-16 sm:px-16 sm:pb-9 text-white flex-col lg:flex-row flex items-start lg:items-center justify-between'>
						<div className='flex-1'>
							<h5 className='font-semibold text-2xl md:text-5xl uppercase'>
								Join our KicksPlus Club & get 15% off
							</h5>
							<p className='mt-4 font-light text-lg md:text-xl opacity-80'>
								Sign up for free! Join the community.
							</p>
							<form className='flex items-center gap-1 mt-8 lg:max-w-[510px]'>
								<Input
									placeholder='Email address'
									className='bg-transparent border border-white placeholder:text-white placeholder:opacity-75 placeholder:font-normal'
								/>
								<Button className='bg-dark-gray text-white py-2 px-6 rounded-lg font-medium text-sm uppercase hover:opacity-80 transition'>
									SUBMIT
								</Button>
							</form>
						</div>
						<Link
							href='/'
							className=' flex-1 flex items-center justify-center
                    '
						>
							<Image
								src='/images/logo-white.svg'
								alt='logo'
								className='lg:w-auto lg:h-auto w-[200px] '
								width={367}
								height={112}
							/>
						</Link>
					</div>
					<div className='bg-dark-gray rounded-3xl sm:rounded-[48px] mt-9 pb-20 sm:pb-0 px-4 py-6 sm:p-10 gap-4 grid vsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  justify-between relative overflow-hidden  sm:h-[500px] '>
						<div className='flex-2 max-w-[450px]'>
							<h5 className='text-yellow text-2xl lg:text-4xl font-semibold'>
								About us
							</h5>
							<p className='text-sm lg:text-lg font-light mt-1 text-white'>
								We are the biggest hyperstore in the universe.
								We got you all cover with our exclusive
								collections and latest drops.
							</p>
						</div>
						{FOOTER_LINKS.map(category => (
							<div
								key={category.title}
								className='flex-1 text-white'
							>
								<h5 className='text-yellow text-2xl lg:text-4xl font-semibold'>
									{category.title}
								</h5>
								<ul
									className={cn("mt-4", {
										"flex items-center gap-6":
											category.links[0].name.includes(
												"/images"
											)
									})}
								>
									{category.links.map(link => (
										<li key={link.name}>
											<Link
												className='font-light text-sm lg:text-lg hover:opacity-80 transition'
												href={link.href}
											>
												{link.name.includes(
													"/images"
												) ? (
													<Image
														width={24}
														height={24}
														alt='social'
														src={link.name}
													/>
												) : (
													link.name
												)}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
						<div className='w-1/2 lg:w-full h-[200px] lg:h-[313px] absolute bottom-3 vsm:bottom-10 translate-y-1/2 left-1/2 -translate-x-1/2'>
							<Image
								src={"/images/logo-white.svg"}
								alt='logo'
								fill
							/>
						</div>
					</div>
				</div>
			</footer>
			<p className='text-center font-light py-7 font-sans'>
				© All rights reserved | 2025
			</p>
		</>
	)
}
