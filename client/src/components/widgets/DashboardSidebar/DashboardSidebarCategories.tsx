import { useQuery } from "@tanstack/react-query"
import { ChevronDown, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"

import categoriesService from "@/services/categories.service"

import { cn } from "@/lib/utils"


export const DashboardSidebarCategories = () => {
	const [open, setOpen] = useState<boolean>(false)

	const { data, isLoading, error } = useQuery({
		queryKey: ["categories"],
		queryFn: () => categoriesService.getCategories()
	})

	if (isLoading) return <Loader2 className='animate-spin' />
	if (error) return <ErrorMessage type='categories' error={error.message} />
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

			<div
				className={cn("hidden flex-col w-full gap-4 mt-4", {
					flex: open
				})}
			>
				{data?.map(category => (
					<Link
						className='flex items-center justify-between'
						key={category.slug}
						href={`/dashboard/${category.slug}`}
					>
						<span>{category.name}</span>
						<div className='w-[41px] h-[35px] bg-gray rounded flex items-center justify-center'>
							{category?.products?.length}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
