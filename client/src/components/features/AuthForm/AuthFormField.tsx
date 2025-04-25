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
}

export const AuthFormField = ({ name, type, placeholder, form }: Props) => {
	return (
		<FormField
			control={form.control}
			name={name as "gender" | "email" | "password" | "username"}
			render={() => (
				<FormItem>
					<FormControl>
						<Input
							{...form.register(
								name as
									| "gender"
									| "email"
									| "password"
									| "username"
							)}
							className='border border-dark-gray rounded-lg py-2 px-4'
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
