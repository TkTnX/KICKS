import { useQuery } from "@tanstack/react-query";



import { useProductForm } from "@/hooks/useProductForm";



import colorService from "@/services/color.service";



import { cn } from "@/lib/utils";





interface Props {
	label: string
	className?: string
	isLoading: boolean
}
export const ChooseProductColors = ({ label, className, isLoading }: Props) => {
	const { store } = useProductForm()

	const { data } = useQuery({
		queryKey: ["colors"],
		queryFn: () => colorService.getAll()
	})

	const onChoose = (color: string) => {
		if (store.colorIds.includes(color)) {
			store.setColorIds(
				store.colorIds.filter(choosedColor => choosedColor !== color)
			)
		} else {
			store.setColorIds([...store.colorIds, color])
		}
	}

	return (
		<div className={cn("", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<div className='flex items-center gap-2 mt-4'>
				{data?.map(color => (
					<button
						disabled={isLoading}
						type='button'
						onClick={() => onChoose(color.id)}
						className={cn(
							`w-10 h-10 bg-[${color.value}] hover:opacity-50 transition   rounded-md disabled:opacity-50 disabled:pointer-events-none`,
							{
								"border-2 border-dark-gray":
									store.colorIds.includes(color.id)
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