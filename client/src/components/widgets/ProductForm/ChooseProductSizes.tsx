import { useQuery } from "@tanstack/react-query"

import { useProductForm } from "@/hooks/useProductForm"

import sizeService from "@/services/size.service"

import { cn } from "@/lib/utils"

interface Props {
	label: string
	className?: string
	isLoading: boolean
}
export const ChooseProductSizes = ({ label, className, isLoading }: Props) => {
	const { store } = useProductForm()
	const { data } = useQuery({
		queryKey: ["sizes"],
		queryFn: () => sizeService.getAll()
	})

	const onChoose = (size: string) => {
		if (store.sizeIds!.includes(size)) {
			store.setSizeIds(
				store.sizeIds!.filter(choosedSize => choosedSize !== size)
			)
		} else {
			store.setSizeIds([...store.sizeIds!, size])
		}
	}

	return (
		<div className={cn("", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<div className='flex items-center gap-2 mt-4'>
				{data?.map(size => (
					<button
						disabled={isLoading}
						type='button'
						onClick={() => onChoose(size.id)}
						className={cn(
							"w-10 h-10 border hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] disabled:hover:opacity-100 disabled:cursor-not-allowed",
							{
								"bg-dark-gray text-white":
									store.sizeIds.includes(size.id)
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
