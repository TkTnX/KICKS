import { Metadata } from "next"
import Link from "next/link"

import { AuthForm, AuthSocials } from "@/components/features/AuthForm"

export const metadata: Metadata = {
	title: "Join Us"
}

const RegisterPage = () => {
	return (
		<div className='flex flex-col w-full'>
			<h2 className='text-3xl font-semibold '>Register</h2>
			<p className='mt-2 font-medium'>Sign up with</p>
			<AuthSocials className='mt-6' />
			<p className='mt-6 font-medium'>OR</p>
			<AuthForm className='mt-6' type='register' />
			<Link href={"/login"} className='text-sm text-dark-gray mt-6'>
				Already have an account?{" "}
				<span className='underline text-yellow'>Sign in</span>
			</Link>
		</div>
	)
}

export default RegisterPage
