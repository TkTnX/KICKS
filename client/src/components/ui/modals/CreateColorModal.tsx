"use client"

import { useState } from "react"

import { ColorForm } from "@/components/features/ColorForm"

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from "../alert-dialog"

type Props = {
	children: React.ReactNode
}

export const CreateColorModal = ({ children }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Create a color</AlertDialogTitle>
				<ColorForm setOpen={setOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}
