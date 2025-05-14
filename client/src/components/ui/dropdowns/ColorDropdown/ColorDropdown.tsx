"use client"

import Link from "next/link"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

import {  IColor } from "@/types"
import { DeleteColorButton } from "./DeleteColorButton"

type Props = { children: React.ReactNode; color: IColor }

export const ColorDropdown = ({ children, color }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<Link
					href={`/dashboard/colors/${color.id}/edit`}
					className='p-2 text-sm'
				>
					Edit Color
				</Link>
				<DropdownMenuItem className='p-0'>
					<DeleteColorButton colorId={color.id} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
