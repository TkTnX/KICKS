import { ColorForm } from "@/components/features/ColorForm"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"

import categoriesService from "@/services/categories.service"
import colorService from "@/services/color.service"

const breadcrumbs = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Colors",
		link: "/dashboard/colors"
	},
	{
		name: "Edit"
	}
]

const DashboardEditColorPage = async ({
	params
}: {
	params: Promise<{ colorId: string }>
}) => {
	const colorId = (await params).colorId

	const color = await colorService.getColorById(colorId)
	return (
		<section>
			<div className='flex flex-col gap-1'>
				<h4 className='text-2xl font-sans font-semibold'>
					{color.name} color
				</h4>
				<Breadcrumbs items={breadcrumbs} />
			</div>
			<div className='mt-10'>
				<ColorForm color={color} />
			</div>
		</section>
	)
}

export default DashboardEditColorPage
