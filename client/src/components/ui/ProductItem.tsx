import Image from "next/image"
import Link from "next/link"

type Props = {
	// TODO: TEMP TYPE
	product: any
}

export const ProductItem = ({ product }: Props) => {
	// TODO: TEMP
	const isNew = true
	return (
		<div>
			<div className='relative w-full h-[200px] lg:h-[334px] rounded-3xl border-4 border-white overflow-hidden'>
				{isNew && (
					<div className='absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl  p-3 vsm:py-3  vsm:px-4 bg-blue text-xs font-semibold text-white z-10'>
						New
					</div>
				)}
				<Image
					className='object-cover'
					src={product.images[0]}
					alt={product.title}
					fill
				/>
			</div>
			<div className='mt-4'>
				<h4 className='font-semibold text-base sm:text-xl lg:text-2xl text-dark-gray'>
					{product.title}
				</h4>
				<Link
					className='mt-4 bg-dark-gray rounded-sm py-2 px-2 sm:px-4 block w-full text-center text-white hover:opacity-90 font-medium transition text-xs sm:text-sm'
					href={`/product/${product.id}`}
				>
					VIEW PRODUCT -{" "}
					<span className='text-yellow'>${product.price}</span>
				</Link>
			</div>
		</div>
	)
}
