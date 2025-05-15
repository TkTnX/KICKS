import { MoreHorizontal } from "lucide-react"
import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { ColorDropdown } from "@/components/ui/dropdowns/ColorDropdown"
import { CreateColorModal } from "@/components/ui/modals/CreateColorModal"

import colorService from "@/services/color.service"

export const metadata: Metadata = {
	title: "Colors"
}

const breadcrumbsList = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Dashboard",
		link: "/dashboard"
	},
	{
		name: "Colors"
	}
]

const DashboardColorsPage = async () => {
	const colors = await colorService.getAll()

	// * TODO: Удаление цветов
	// * TODO: Редактирование цветов
	// * TODO: Создание цветов
	// * TODO: У products создать счётчик, соклько раз их купили
	// * TODO: Thanks page



	return (
		<section>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>Colors</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
				<CreateColorModal>
					<Button className='bg-blue font-sans'>
						Create new color
					</Button>
				</CreateColorModal>
			</div>
			<div className='mt-4 flex items-center gap-4'>
				{colors.map(color => (
					<div key={color.id} className='bg-white  p-5 pb-2 relative'>
						<div
							className='w-10 h-10 rounded-full '
							style={{ backgroundColor: color.value }}
						/>
						<p className='text-sm font-sant opacity-60'>
							{color.name}
						</p>
						<ColorDropdown color={color}>
							<button className='absolute top-0 right-0'>
								<MoreHorizontal />
							</button>
						</ColorDropdown>
					</div>
				))}
			</div>
		</section>
	)
}

export default DashboardColorsPage
