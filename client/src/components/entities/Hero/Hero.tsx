import { HeroProduct } from "./HeroProduct"

export const Hero = () => {
	return (
		<section className='container flex flex-col items-center justify-center gap-6 mt-6'>
			<h1 className='font-bold  text-4xl vsm:text-5xl sm:text-7xl lg:text-9xl uppercase'>
				DO IT <span className='text-blue'>RIGHT</span>
			</h1>
			<HeroProduct />
		</section>
	)
}
