import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { useCookies } from "react-cookie"
import { toast } from "react-toastify"

import authService from "@/services/auth.service"

import { EGender } from "@/types"
import { IAuthForm } from "@/types/auth.interface"

export function useAuth() {
	const [gender, setGender] = useState<EGender | null>(null)
	const [_, setCookie] = useCookies(["access_token"])
	const router = useRouter()

	const onAuth = async (type: "login" | "register", data: IAuthForm) => {
		try {
			const response = await authService[type]({
				...data,
				gender: gender as EGender
			})

			setCookie("access_token", response.access_token)
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

	return useMemo(
		() => ({ onAuth, gender, setGender }),
		[onAuth, gender, setGender]
	)
}
