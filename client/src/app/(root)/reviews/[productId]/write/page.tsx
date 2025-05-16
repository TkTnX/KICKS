import Image from "next/image"

import { WriteReviewForm } from "@/components/widgets/WriteReviewForm"

import productsService from "@/services/products.service"
import { formatPrice } from "@/helpers/formatPrice"

const WriteReviewPage = async ({
	params
}: {
	params: Promise<{ productId: string }>
}) => {
	const productId = (await params).productId

	const product = await productsService.getById(productId)
	
	return (
		<section className='container'>
			<h2 className='text-2xl mt-10'>
				Write your review on {product.title}
			</h2>
			<div className='mt-5 flex items-start justify-between'>
				<div className='flex items-start gap-2 flex-1'>
					<Image
						src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]}`}
						alt={product.title}
						width={150}
						height={150}
						className='object-cover rounded-lg'
					/>
					<div>
						<h6>{product.title}</h6>
						<p className='font-sans opacity-60'>{formatPrice(product.price)}</p>
						<p>{product.description}</p>
					</div>
				</div>
				<WriteReviewForm product={product} />
			</div>
		</section>
	)
}

export default WriteReviewPage
