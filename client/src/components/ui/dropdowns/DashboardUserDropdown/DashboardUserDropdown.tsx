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
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<p>USERNAME</p>
				<DropdownMenuItem>
					<button>LOG OUT</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
