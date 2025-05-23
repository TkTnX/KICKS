"use client"

import { useState } from "react"

import { CategoryForm } from "@/components/features/CategoryForm"

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from "../alert-dialog"

type Props = {
	children: React.ReactNode
}

export const CreateCategoryModal = ({ children }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Create a category</AlertDialogTitle>
				<CategoryForm setOpen={setOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}
