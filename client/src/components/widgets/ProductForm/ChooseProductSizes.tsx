import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

import sizeService from "@/services/size.service"

import { cn } from "@/lib/utils"

interface Props {
	label: string
	className?: string
}
export const ChooseProductSizes = ({ label, className }: Props) => {
	const [choosedSizes, setChoosedSizes] = useState<string[]>([])
	const { data } = useQuery({
		queryKey: ["sizes"],
		queryFn: () => sizeService.getAll()
	})

	const onChoose = (size: string) => {
		if (choosedSizes.includes(size)) {
			setChoosedSizes(
				choosedSizes.filter(choosedSize => choosedSize !== size)
			)
		} else {
			setChoosedSizes([...choosedSizes, size])
		}
	}

	return (
		<div className={cn("", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<div className='flex items-center gap-2 mt-4'>
				{data?.map(size => (
					<button
						type='button'
						onClick={() => onChoose(size.size)}
						className={cn(
							"w-10 h-10 border hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] disabled:hover:opacity-100 disabled:cursor-not-allowed",
							{
								"bg-dark-gray text-white":
									choosedSizes.includes(size.size)
							}
						)}
						key={size.id}
					>
						{size.size}
					</button>
				))}
			</div>
		</div>
	)
}
