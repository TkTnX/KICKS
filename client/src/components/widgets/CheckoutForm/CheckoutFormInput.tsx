import { UseFormReturn } from "react-hook-form"

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ICheckout } from "@/types/checkout.interface"

type Props = {
	form: UseFormReturn<ICheckout>
	disabled: boolean
	name: string
	type: string
	placeholder: string
	className?: string
}

export const CheckoutFormInput = ({
	form,
	disabled,
	type,
	name,
	placeholder,
	className
}: Props) => {
	return (
		<FormField
			control={form.control}
			name={name as any}
			render={() => (
				<FormItem className={className}>
					<FormControl>
						<Input
							disabled={disabled}
							{...form.register(name as any)}
							className='border border-dark-gray rounded-lg py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-sm sm:placeholder:text-base'
							type={type}
							placeholder={placeholder}
							required
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
