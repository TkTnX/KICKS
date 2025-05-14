"use client"

import Link from "next/link"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

import { DeleteCategoryButton } from "./DeleteCategoryButton"
import { ICategory } from "@/types"

type Props = { children: React.ReactNode; category: ICategory }

export const CategoryDropdown = ({ children, category }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<Link
					href={`/dashboard/categories/${category.slug}/edit`}
					className='p-2 text-sm'
				>
					Edit Category
				</Link>
				<DropdownMenuItem className='p-0'>
					<DeleteCategoryButton categoryId={category.id} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
