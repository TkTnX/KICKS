import Image from "next/image"

import { BagItemControls } from "../features/BagItemControls"

export const BagItem = () => {
	return (
		<div className='flex items-stretch gap-2 sm:gap-6 w-full max-h-[225px]'>
			<div className='relative w-[180px] h-[155px] sm:w-[200px] sm:h-[225px]'>
				<Image
					src={"/images/products/1.jpg"}
					alt='product'
					className='rounded-3xl object-cover'
					fill
				/>
			</div>
			<div className='w-full flex flex-col justify-between'>
				<div className='flex flex-col w-full'>
					<div className='flex flex-col lg:flex-row  lg:items-center justify-between'>
						<h5 className='text-base lg:text-2xl font-semibold'>
							DROPSET TRAINER SHOES
						</h5>
						<p className='text-base lg:text-2xl sont-semibold text-blue'>
							$130.00
						</p>
					</div>
					<p className='text-sm lg:text-base mt-2 opacity-80 font-sans'>
						Men’s Road Running Shoes{" "}
					</p>
					<p className='text-sm lg:text-base mt-2 opacity-80 font-sans'>
						Enamel Blue/ University White
					</p>
					<div className='flex flex-col sm:flex-row sm:items-center sm:gap-10 mt-2'>
						{/* TODO: В будущем сделать select */}
						<p className='text-sm lg:text-base font-sans  opacity-80'>
							Size 40
						</p>
						<p className='text-sm lg:text-base font-sans  opacity-80'>
							Quantity 1
						</p>
					</div>
				</div>
				<BagItemControls />
			</div>
		</div>
	)
}
