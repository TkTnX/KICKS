import { useQuery } from "@tanstack/react-query"

import sizeService from "@/services/size.service"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

interface Props {
	label: string
	className?: string
}
export const ChooseProductSizes = ({ label, className }: Props) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["sizes"],
		queryFn: () => sizeService.getAll()
	})

    // TODO: Доделывать редактирование продукта

	return (
		<div className={cn("", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
            <div>
                {
                    data?.map((size) => <Checkbox value={size.size}  />)
                }
            </div>
		</div>
	)
}
