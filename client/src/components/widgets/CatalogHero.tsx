import Image from "next/image"

export const CatalogHero = () => {
	return (
		<section className='relative h-[200px] sm:h-[395px] w-full mt-20'>
			<Image
				src='/images/catalogHero.jpg'
				alt='Catalog Hero'
				fill
				className='object-cover rounded-4xl'
			/>
			<div className='flex flex-col gap-2 absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[200px] sm:max-w-[490px]'>
				<p className='font-sans text-xs sm:text-2xl'>
					Limited time only
				</p>
				<h3 className='font-semibold text-xl sm:text-7xl'>
					Get 30% off
				</h3>
				<p className='font-sans text-[10px] sm:text-xl '>
					Sneakers made with your comfort in mind so you can put all
					of your focus into your next session.
				</p>
			</div>
		</section>
	)
}
