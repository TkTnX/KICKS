import { useEffect, useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

import { useUserStore } from "@/stores/userStore"
import { EGender } from "@/types"

type Props = {
	setSelectedGender: (gender: EGender) => void
	selectedGender: EGender
}

export const ChooseGender = ({ setSelectedGender, selectedGender }: Props) => {
	const { user } = useUserStore()
	useEffect(() => setSelectedGender(user?.gender as EGender), [user])
	return (
		<div className=''>
			<span className='text-xl font-sans font-semibold'>Gender</span>
			<label className='flex items-center gap-4 cursor-pointer'>
				<Checkbox
					onClick={() => setSelectedGender(EGender.MEN)}
					checked={selectedGender === "men"}
					className='rounded-sm  transition flex items-center justify-center text-dark-gray '
				/>
				Man
			</label>
			<label className='flex items-center gap-4 cursor-pointer'>
				<Checkbox
					onClick={() => setSelectedGender(EGender.WOMEN)}
					checked={selectedGender === "women"}
					className='rounded-sm  transition flex items-center justify-center text-dark-gray '
				/>
				Woman
			</label>
		</div>
	)
}
