import { ListChecksIcon, MoreHorizontal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";



import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CategoryDropdown } from "@/components/ui/dropdowns/CategoryDropdown";
import { CreateCategoryModal } from "@/components/ui/modals"



import categoriesService from "@/services/categories.service";





export const metadata: Metadata = {
	title: "Categories"
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

const DashboardCategoriesPage = async () => {
	const categories = await categoriesService.getCategories()

	return (
		<section>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>
						Categories
					</h4>
					<Breadcrumbs items={breadcrumbs} />
				</div>
				<CreateCategoryModal>
					<Button className='bg-blue font-sans'>
						Create new category
					</Button>
				</CreateCategoryModal>
			</div>
			<div className='flex flex-wrap gap-3 mt-4'>
				{categories.map(category => (
					<div
						className='p-4 bg-white rounded-2xl  flex-1 text-nowrap hover:opacity-70 transition relative'
						key={category.id}
					>
						<Link
							href={`/catalog/${category.slug}`}
							className='absolute w-full h-full z-10 top-0 left-0'
						/>
						<div className='flex items-center gap-2'>
							<div className='p-1 rounded-full bg-blue'>
								<ListChecksIcon color='#fff' />
							</div>
							<p className='flex-1'>{category.name}</p>
							<CategoryDropdown categoryId={category.id}>
								<button className='relative z-[11]'>
									<MoreHorizontal />
								</button>
							</CategoryDropdown>
						</div>
						<p className='font-sans text-sm opacity-60'>
							Products: {category._count.products}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default DashboardCategoriesPage