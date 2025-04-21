"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet"

import { HEADER_LINKS } from "./config"

export const HeaderMobile = () => {
	const [open, setOpen] = useState(false)
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className='sm:hidden' asChild>
				<button>
					<Menu size={24} />
				</button>
			</SheetTrigger>
			<SheetContent side='left' className='w-full bg-dark-light'>
				<SheetHeader>
					<SheetTitle />
					<SheetDescription />
				</SheetHeader>
				<div className='flex flex-col items-center gap-10  '>
					{HEADER_LINKS.map(link => (
						<Link
							onClick={() => setOpen(false)}
							className='hover:opacity-80 transition'
							href={link.href}
							key={link.href}
						>
							{link.title}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}
