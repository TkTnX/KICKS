import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ProductItem } from "@/components/ui/ProductItem"

import categoriesService from "@/services/categories.service"

export const metadata: Metadata = {
	title: "CATEGORY"
}

const breadcrumbs = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Categories",
		link: "/dashboard/categories"
	}
]

const DashboardCategoryPage = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const slug = (await params).slug

	const category = await categoriesService.getCategoryBySlug(slug)

	return (
		<section>
			<div className='flex flex-col gap-1'>
				<h4 className='text-2xl font-sans font-semibold'>
					{category.name} category
				</h4>
				<Breadcrumbs
					items={[...breadcrumbs, { name: category.name }]}
				/>
			</div>
			<div className=' grid vsm:grid-cols-2 sm:flex flex-wrap mt-4 gap-3'>
				{category.products?.length ? (
					category.products?.map(product => (
						<ProductItem
							key={product.id}
							className={"flex-1"}
							product={product}
						/>
					))
				) : (
					<p className='text-center text-2xl w-full'>
						No products yet
					</p>
				)}
			</div>
		</section>
	)
}

export default DashboardCategoryPage
