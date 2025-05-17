import { Metadata } from "next"

import { DeleteSizeButton } from "@/components/features/DeleteSizeButton"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { Button } from "@/components/ui/button"

import sizeService from "@/services/size.service"
import { CreateSizeModal } from "@/components/ui/modals"

export const metadata: Metadata = {
	title: "Sizes"
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
		name: "Sizes"
	}
]

const DashboardSizesPage = async () => {
	const sizes = await sizeService.getAll()

	return (
		<section>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>Sizes</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
				<CreateSizeModal>
					<Button className='bg-blue font-sans'>
						Create new size
					</Button>
				</CreateSizeModal>
			</div>
			<p className='mt-4'>Available sizes</p>
			<div className='mt-4 flex items-center gap-4'>
				{sizes.map(size => (
					<div
						key={size.id}
						className='bg-white  p-5  relative rounded-lg group'
					>
						<p className='text-sm '>{size.size}</p>
						<DeleteSizeButton sizeId={size.id} />
					</div>
				))}
			</div>
		</section>
	)
}

export default DashboardSizesPage
