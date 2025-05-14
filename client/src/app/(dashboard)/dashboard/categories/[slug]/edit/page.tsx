import { CategoryForm } from "@/components/features/CategoryForm"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"

import categoriesService from "@/services/categories.service"

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

const EditCategoryPage = async ({
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
					items={[
						...breadcrumbs,
						{
							name: category.name,
							link: `/dashboard/categories/${category.slug}`
						},
						{
							name: "Edit"
						}
					]}
				/>
			</div>
			<div className='mt-10'>
				<CategoryForm category={category} />
			</div>
		</section>
	)
}

export default EditCategoryPage
