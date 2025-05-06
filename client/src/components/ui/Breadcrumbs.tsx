import { ChevronRight } from "lucide-react"
import Link from "next/link"

type Props = {
	items: { name: string; link?: string }[]
}

export const Breadcrumbs = ({ items }: Props) => {
	return (
		<div className='flex items-center '>
			{items.map((item, index) => (
				<div className='flex items-center ' key={index}>
					{item.link ? (
						<Link
							className='hover:opacity-80 transition'
							href={item.link}
						>
							{item.name}
						</Link>
					) : (
						<span>{item.name}</span>
					)}
					{index + 1 !== items.length && (
						<ChevronRight className='mx-2' size={18} />
					)}
				</div>
			))}
		</div>
	)
}
