"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

type Props = {
	children: React.ReactNode
	productId: string
}

export const DashboardProductDropdown = ({ children, productId }: Props) => {
	const pathname = usePathname()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className='p-0'>
					<Link
						className='p-2'
						href={`${pathname}/${productId}/edit`}
					>
						Edit Product
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='p-0'>
					<button className='p-2'>Delete Product</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
