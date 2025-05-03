import Image from "next/image"

import { BagItemControls } from "../features/BagItemControls"

export const BagItem = () => {
	return (
		<div className='flex items-stretch gap-6 w-full max-h-[225px]'>
			<Image
				src={"/images/products/1.jpg"}
				alt='product'
				width={200}
				height={225}
				className='rounded-3xl'
			/>
			<div className='w-full flex flex-col justify-between'>
				<div className='flex flex-col w-full'>
					<div className='flex items-center justify-between'>
						<h5 className='text-2xl font-semibold'>
							DROPSET TRAINER SHOES
						</h5>
						<p className='text-2xl sont-semibold text-blue'>
							$130.00
						</p>
					</div>
					<p className='mt-2 opacity-80 font-sans'>
						Men’s Road Running Shoes{" "}
					</p>
					<p className='mt-2 opacity-80 font-sans'>
						Enamel Blue/ University White
					</p>
					<div className='flex items-center gap-10 mt-2'>
						{/* TODO: В будущем сделать select */}
						<p className='font-sans  opacity-80'>Size 40</p>
						<p className='font-sans  opacity-80'>Quantity 1</p>
					</div>
				</div>
				<BagItemControls />
			</div>
		</div>
	)
}
