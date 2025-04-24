"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { EGender } from "@/shared/types"
import { IAuthForm } from "@/shared/types/auth.interface"

import { Form } from "../../ui/form"

import { AuthFormField } from "./AuthFormField"
import { cn } from "@/lib/utils"

type Props = {
	type: "login" | "register"
	className?: string
}

export const AuthForm = ({ type, className }: Props) => {
	const form = useForm<IAuthForm>()
	const [gender, setGender] = useState<EGender | null>(null)

	const onSubmit = (data: IAuthForm) => {
		try {
			if (type === "register") {
				console.log(data)
			} else {
				console.log(data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Form {...form}>
			<form
				className={cn("flex flex-col gap-6", className)}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				{type === "register" && (
					<div className='flex flex-col gap-6'>
						<div className='flex flex-col gap-5'>
							<h4 className='text-2xl font-semibold'>
								Your Name
							</h4>
							<AuthFormField
								form={form}
								name='username'
								type='text'
								placeholder='Username'
							/>
						</div>
						<div className='flex flex-col gap-5'>
							<h4 className='text-2xl font-semibold'>Gender</h4>
							<div className='flex items-center gap-8'>
								<div className='flex items-center gap-2'>
									<Checkbox
										checked={gender === EGender.MEN}
										onCheckedChange={() =>
											setGender(EGender.MEN)
										}
										id='male'
									/>
									<label htmlFor='male'>Male</label>
								</div>
								<div className='flex items-center gap-2'>
									<Checkbox
										checked={gender === EGender.WOMEN}
										onCheckedChange={() =>
											setGender(EGender.WOMEN)
										}
										id='female'
									/>
									<label htmlFor='female'>Female</label>
								</div>
							</div>
						</div>
						<h4 className='text-2xl font-semibold'>
							Login Details
						</h4>
					</div>
				)}
				<AuthFormField
					form={form}
					name='email'
					type='email'
					placeholder='Email'
				/>
				<AuthFormField
					form={form}
					name='password'
					type='password'
					placeholder='Password'
				/>
				{type === "register" ? (
					<p className='text-xs font-third font-light'>
						Minimum 6 characters with at least one uppercase, one
						lowercase, one special character and a number
					</p>
				) : (
					<div className='flex items-center gap-2'>
						<Checkbox className='bg-white' id='keep-me-logged-in' />
						<label htmlFor='keep-me-logged-in' className='text-sm'>
							Keep me logged in - applies to all log in options
							below.
						</label>
					</div>
				)}

				<Button className='flex items-center justify-between bg-dark-gray rounded-lg py-2 px-4 text-white uppercase text-sm w-full font-bold'>
					{type === "register" ? "REGISTER" : "EMAIL LOGIN"}
					<ArrowRight size={16} />
				</Button>
			</form>
		</Form>
	)
}
