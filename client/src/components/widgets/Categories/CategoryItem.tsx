import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
	// TODO: TEMP TYPE
	category: any
}

export const CategoryItem = ({ category }: Props) => {
	return (
		<div className='bg-[#eceef0]'>
			<div className='relative w-full h-[200px] lg:h-[400px] bg-[#eceef0]'>
				<Image
					src={category.image}
					alt={category.title}
					fill
					className='object-cover'
				/>
			</div>
			<div className='flex items-center justify-between px-12 mt-4'>
				<h6 className='text-4xl uppercase max-w-[200px] text-dark-gray'>
					{category.title}
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
