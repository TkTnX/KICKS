import { LogoutButton } from "@/components/features/LogoutButton"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

import { IUser } from "@/types"

type Props = {
	children: React.ReactNode
	user: IUser | null
}

export const DashboardUserDropdown = ({ children, user }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className='p-4 w-[230px]'>
				<p className='text-xl font-sans font-semibold'>{user?.name}</p>
				<DropdownMenuItem className='mt-4 p-0 w-full'>
					<LogoutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
