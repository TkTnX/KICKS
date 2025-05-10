import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ProductForm } from "@/components/widgets/ProductForm"

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
		name: "Add New Product"
	}
]

export const metadata: Metadata = {
	title: "Create"
}

const CreateProductPage = () => {
	return (
		<section>
			<h2 className='text-2xl font-sans font-semibold'>
				Product Details
			</h2>
            <Breadcrumbs items={breadcrumbs} />
            <ProductForm />
		</section>
	)
}

export default CreateProductPage
