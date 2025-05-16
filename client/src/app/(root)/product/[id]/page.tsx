import { Metadata } from "next"

import { ProductImages } from "@/components/entities/ProductImages"
import { ProductDetails } from "@/components/widgets/ProductDetails"
import { ProductReviews } from "@/components/widgets/ProductReviews"
import { YouMayAlsoLike } from "@/components/widgets/YouMayAlsoLike"

import productsService from "@/services/products.service"

export const metadata: Metadata = {
	title: "Product Page"
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id

	const product = await productsService.getById(id)
	return (
		<main className='container'>
			<section className='mt-8 flex flex-col lg:flex-row w-full items-start gap-4'>
				<div className='lg:max-w-[875px] w-full lg:w-auto flex items-center justify-center  flex-1'>
					<ProductImages images={product.images} />
				</div>
				<ProductDetails product={product} />
			</section>
			<ProductReviews productId={product.id} />
			<YouMayAlsoLike categories={[product.category.slug]} />
		</main>
	)
}

export default ProductPage
