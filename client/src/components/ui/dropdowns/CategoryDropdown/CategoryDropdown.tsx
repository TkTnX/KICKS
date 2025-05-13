"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

import { DeleteCategoryButton } from "./DeleteCategoryButton"

type Props = { children: React.ReactNode; categoryId: string }

export const CategoryDropdown = ({ children, categoryId }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className='p-0'>
					<button className='p-2'>Edit Category</button>
				</DropdownMenuItem>
				<DropdownMenuItem className='p-0'>
					<DeleteCategoryButton categoryId={categoryId} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
