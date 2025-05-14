"use client"

import { useState } from "react"

import { CategoryForm } from "@/components/features/CategoryForm"

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from "../alert-dialog"

import { ICategory } from "@/types"

type Props = {
	children: React.ReactNode
	category: ICategory
}

export const EditCategoryModal = ({ children, category }: Props) => {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>
					Edit{" "}
					<span className='font-sans text-sm'>{category.name}</span>{" "}
					category
				</AlertDialogTitle>
				<CategoryForm setOpen={setOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}
