import type * as SelectPrimitive from "@radix-ui/react-select"
import { useQuery } from "@tanstack/react-query"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import categoriesService from "@/services/categories.service"

interface Props {
	label: string
	className?: string
}

export const ProductCategorySelect = ({ label, className }: Props) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["categories"],
		queryFn: () => categoriesService.getCategories()
	})

	return (
		<Select name='categoryId'>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<SelectTrigger className='!w-full !border !border-dark-gray !text-[#73737c]'>
				{" "}
				<SelectValue placeholder='Choose category' />
			</SelectTrigger>
			<SelectContent className='w-full'>
				{data?.map(category => (
					<SelectItem key={category.id} value={category.id}>
						{category.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
