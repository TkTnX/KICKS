import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { cn } from "@/lib/utils"

// TEMP
const categories = [
	{
		name: "Runners",
		slug: "runners",
		products: 21
	},
	{
		name: "Golf",
		slug: "gold",
		products: 21
	},
	{
		name: "Hiking",
		slug: "hiking",
		products: 21
	},
	{
		name: "Football",
		slug: "football",
		products: 21
	}
]

export const DashboardSidebarCategories = () => {
	const [open, setOpen] = useState<boolean>(false)
	const pathname = usePathname()
	return (
		<div className='mt-12 w-full'>
			<button
				onClick={() => setOpen(!open)}
				className='flex items-center justify-between w-full'
			>
				<h6>Categories</h6>
				<ChevronDown
					className={`transition ${open ? "rotate-180" : ""}`}
				/>
			</button>

			{/* TODO: Вывод всех категорий магазина */}
			<div className={cn("hidden flex-col w-full gap-4 mt-4", { flex: open })}>
				{categories.map(category => (
					<Link
						className='flex items-center justify-between'
						key={category.slug}
						href={`${pathname}/${category.slug}`}
					>
						<span>{category.name}</span>
						<div className='w-[41px] h-[35px] bg-gray rounded flex items-center justify-center'>
							{category.products}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
