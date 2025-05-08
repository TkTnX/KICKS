import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import colorService from "@/services/color.service"

import { cn } from "@/lib/utils"

interface Props {
	label: string
	className?: string
}
export const ChooseProductColors = ({ label, className }: Props) => {
	const [choosedColors, setChoosedColors] = useState<string[]>([])
	const { data } = useQuery({
		queryKey: ["colors"],
		queryFn: () => colorService.getAll()
	})

	const onChoose = (size: string) => {
		if (choosedColors.includes(size)) {
			setChoosedColors(
				choosedColors.filter(choosedSize => choosedSize !== size)
			)
		} else {
			setChoosedColors([...choosedColors, size])
		}
	}

	return (
		<div className={cn("", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<div className='flex items-center gap-2 mt-4'>
				{data?.map(color => (
					<button
						type='button'
						onClick={() => onChoose(color.id)}
						className={cn(
							`w-10 h-10 bg-[${color.value}] hover:opacity-50 transition   rounded-md`,
							{
								"border-2 border-dark-gray":
									choosedColors.includes(color.id)
							}
						)}
						style={{ backgroundColor: color.value }}
						key={color.id}
					/>
				))}
			</div>
		</div>
	)
}
