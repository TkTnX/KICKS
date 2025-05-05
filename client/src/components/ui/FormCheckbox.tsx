import { Checkbox } from "./checkbox"
import { cn } from "@/lib/utils"

type Props = {
	className?: string
    children: React.ReactNode
    name: string
}

export const FormCheckbox = ({ className, children, name }: Props) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Checkbox className='bg-white' id={name} />
			<label htmlFor={name} className='text-sm'>
				{children}
			</label>
		</div>
	)
}
