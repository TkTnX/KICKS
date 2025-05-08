import { InputHTMLAttributes } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormControl, FormField, FormItem, FormMessage } from "./form"
import { Input } from "./input"
import { cn } from "@/lib/utils"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	formItem: UseFormReturn<any>
	label: string
	className?: string
	disabled?: boolean
}

export const ProductInput = ({
	label,
	className,
	formItem,
	disabled,
	...props
}: Props) => {
	return (
		<label className={cn("flex flex-col gap-4", className)}>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<FormField
				control={formItem.control}
				name={props.name as string}
				render={() => (
					<FormItem>
						<FormControl>
							<Input
								disabled={disabled}
								{...formItem.register(props.name as string)}
								className='border border-dark-gray rounded-lg py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed'
								type={props.type}
								placeholder={props.placeholder}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</label>
	)
}
