import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { toast } from "react-toastify"

import authService from "@/services/auth.service"
import userService from "@/services/user.service"

import { EGender, IUser } from "@/types"
import { IAuthForm } from "@/types/auth.interface"

export function useAuth() {
	const [user, setUser] = useState<IUser | null>(null)
	const [gender, setGender] = useState<EGender | null>(null)
	const router = useRouter()

	const getMe = async () => {
		const res = await userService.getMe()
		return res
	}

	const { mutate, isPending, error } = useMutation({
		mutationFn: async ({
			type,
			data
		}: {
			type: "login" | "register"
			data: IAuthForm
		}) => {
			try {
				await authService[type]({
					...data,
					gender: gender as EGender
				})

				toast.success(
					`${type === "register" ? "Registration" : "Login"} successful!`
				)
				router.push("/")
			} catch (error) {
				if (error instanceof AxiosError) {
					if (error?.response?.data?.message) {
						toast.error(
							typeof error.response.data.message === "string"
								? error.response.data.message
								: error.response.data.message[0]
						)
					}
				}
			}
		},
		onSuccess: async () => {
			const user = await getMe()
			setUser(user)
		}
	})


	return useMemo(
		() => ({
			mutate,
			isPending,
			error,
			gender,
			setGender,
			getMe,
			user,
			setUser
		}),
		[mutate, isPending, error, gender, setGender, getMe, user, setUser]
	)
}
