import { CategoriesCarousel } from "@/components/widgets/Categories"

const CatalogPage = async () => {
	return (
		<section className=' mt-10 overflow-hidden'>
			<h2 className='text-5xl font-bold'>Categories</h2>
			<CategoriesCarousel className='!ml-0 rounded-tl-none' />
		</section>
	)
}

export default CatalogPage
