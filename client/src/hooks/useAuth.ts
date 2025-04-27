import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { useCookies } from "react-cookie"
import { toast } from "react-toastify"

import authService from "@/services/auth.service"

import { axiosInstance } from "@/lib/axiosInstance"
import { EGender } from "@/types"
import { IAuthForm } from "@/types/auth.interface"

export function useAuth() {
	const [gender, setGender] = useState<EGender | null>(null)
	const [cookies, setCookies] = useCookies()
	const router = useRouter()

	const getRefreshToken = async () => {
		const res = await axiosInstance.get("/auth/refresh")
		setCookies("refreshToken", res.data.accessToken)
		return res.data.accessToken
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
		}
	})

	return useMemo(
		() => ({
			mutate,
			isPending,
			error,
			gender,
			setGender,
			getRefreshToken
		}),
		[mutate, isPending, error, gender, setGender, getRefreshToken]
	)
}
