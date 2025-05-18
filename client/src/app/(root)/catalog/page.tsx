import { Suspense } from "react"

import { CatalogControls } from "@/components/features/CatalogControls/CatalogControls"
import { CategoriesCarousel } from "@/components/widgets/Categories"

const CatalogPage = async () => {
	return (
		<section className=' mt-10 overflow-hidden'>
			<h2 className='text-5xl font-bold'>Categories</h2>
			<CategoriesCarousel className='!ml-0 rounded-tl-none' />
			<Suspense fallback={<span>Loading...</span>}>
				<CatalogControls className='mt-4' />
			</Suspense>
		</section>
	)
}

export default CatalogPage
