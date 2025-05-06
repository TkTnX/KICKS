"use client"

import { useMutation } from "@tanstack/react-query"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import authService from "@/services/auth.service"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

type Props = {
	children: React.ReactNode
}

export const DashboardUserDropdown = ({ children }: Props) => {
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
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className='p-4 w-[230px]'>
				<p className='text-xl font-sans font-semibold'>USERNAME</p>
				<DropdownMenuItem className='mt-4 p-0 w-full'>
					<button
						onClick={() => mutation.mutate()}
						className='p-2 flex items-center justify-between text-sm uppercase w-full hover:bg-gray/50 transition rounded-lg'
					>
						LOG OUT
						<LogOut color='#232321' />
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
