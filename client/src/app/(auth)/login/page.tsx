import { Metadata } from "next"
import Link from "next/link"

import { AuthForm, AuthSocials } from "@/components/features/AuthForm"

export const metadata: Metadata = {
	title: "Welcome back!"
}

const LoginPage = () => {
	return (
		<div className='flex flex-col gap-6'>
			<h2 className='text-3xl font-semibold'>Login</h2>
			<AuthForm type='login' />
			<AuthSocials />

			<p className='font-sans text-sm '>
				By clicking 'Log In' you agree to our website KicksClub Terms &
				Conditions, Kicks Privacy Notice and Terms & Conditions.
			</p>
			<Link href={"/register"} className='text-sm text-dark-gray'>
				Don't have an account?{" "}
				<span className='underline text-yellow'>Sign up</span>
			</Link>
		</div>
	)
}

export default LoginPage
