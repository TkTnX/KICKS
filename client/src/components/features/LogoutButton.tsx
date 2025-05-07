"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import authService from "@/services/auth.service"

import { Button } from "../ui/button"

export const LogoutButton = () => {
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: () => authService.logout(),
		onError: err => toast.error(err.message),
		onSuccess: () => {
			toast.success("Logout!")
			router.push("/")
		}
	})
	return (
		<Button
			onClick={() => mutation.mutate()}
			className='bg-blue hover:bg-blue/80 font-sans'
		>
			Log out
		</Button>
	)
}
