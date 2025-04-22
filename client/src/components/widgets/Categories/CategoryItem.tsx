import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ICategory } from "@/shared/types"

type Props = {
	category: ICategory
}

export const CategoryItem = ({ category }: Props) => {
	return (
		<div className=' bg-[#eceef0]'>
			<div className='relative w-full h-[200px] lg:h-[400px] bg-[#eceef0]'>
				<Image
					// todo: В будущем тут отображать картинку одного из продуктов
					src={category.image}
					alt={category.name}
					fill
					className='object-cover'
				/>
			</div>
			<div className='flex items-center justify-between px-4 lg:px-12 mt-4 pb-7'>
				<h6 className='text-2xl sm:text-4xl uppercase max-w-[200px] text-dark-gray'>
					{category.name}
				</h6>
				<Link
					className=' w-12 h-12 bg-dark-gray rounded-lg flex items-center justify-center hover:opacity-80 transition'
					href={`/catalog?category=${category.slug}`}
				>
					<ArrowUpRight color='#fff' />
				</Link>
			</div>
		</div>
	)
}
