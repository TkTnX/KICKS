import { UseFormReturn } from "react-hook-form"

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { IAuthForm } from "@/types/auth.interface"

type Props = {
	name: string
	type: string
	placeholder: string
	form: UseFormReturn<IAuthForm>
	disabled?: boolean
}

export const AuthFormField = ({ name, type, placeholder, form, disabled }: Props) => {
	return (
		<FormField
			control={form.control}
			name={name as "gender" | "email" | "password" | "username"}
			render={() => (
				<FormItem>
					<FormControl>
						<Input
							disabled={disabled}
							{...form.register(
								name as
									| "gender"
									| "email"
									| "password"
									| "username"
							)}
							className='border border-dark-gray rounded-lg py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed'
							type={type}
							placeholder={placeholder}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
