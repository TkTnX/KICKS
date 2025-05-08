import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ProductForm } from "@/components/widgets/ProductForm"

import productsService from "@/services/products.service"

const breadcrumbs = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "All products",
		link: "/dashboard/products"
	},
	{
		name: "Product Details"
	}
]

export const metadata: Metadata = {
	title: "Edit product"
}

const EditProductPage = async ({
	params
}: {
	params: Promise<{ id: string }>
}) => {
	const id = (await params).id

	const product = await productsService.getById(id)

	return (
		<section>
			<h2 className='text-2xl font-sans font-semibold'>
				Product Details
			</h2>
			<Breadcrumbs items={breadcrumbs} />
			<ProductForm product={product} />
		</section>
	)
}

export default EditProductPage
