"use client"

import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { useAuth } from "@/hooks/useAuth"

import { Form } from "../../ui/form"

import { AuthFormField } from "./AuthFormField"
import { cn } from "@/lib/utils"
import { EGender } from "@/types"
import { IAuthForm } from "@/types/auth.interface"

type Props = {
	type: "login" | "register"
	className?: string
}
export const AuthForm = ({ type, className }: Props) => {
	const form = useForm<IAuthForm>()
	const { mutate, isPending, error, gender, setGender } = useAuth()
	const onSubmit = async (data: IAuthForm) => mutate({ type, data })

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
								disabled={isPending}
								form={form}
								name='name'
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
										disabled={isPending}
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
										disabled={isPending}
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
					disabled={isPending}
				/>
				<AuthFormField
					form={form}
					name='password'
					type='password'
					placeholder='Password'
					disabled={isPending}
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

				<Button
					disabled={isPending}
					className='flex items-center justify-between bg-dark-gray rounded-lg py-2 px-4 text-white uppercase text-sm w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed'
				>
					{type === "register" ? "REGISTER" : "EMAIL LOGIN"}
					<ArrowRight size={16} />
				</Button>
				{error && (
					<ErrorMessage error={error.message} type={"Auth Error"} />
				)}
			</form>
		</Form>
	)
}
