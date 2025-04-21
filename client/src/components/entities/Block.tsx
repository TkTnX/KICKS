import { Link } from "../ui/Link"
import { ProductItem } from "../ui/ProductItem"

type Props = {
	title: string
	link: string
	linkTitle: string
	// TODO: TEMP TYPE
	products: any[]
}

export const Block = ({ title, link, linkTitle, products }: Props) => {
	return (
		<div>
			<div className='flex items-end justify-between'>
				<h3 className='flex-1 lg:max-w-[650px] text-xl vsm:text-2xl sm:text-4xl  lg:text-7xl font-semibold leading-[95%] uppercase text-dark-gray'>
					{title}
				</h3>
				<Link href={link}>{linkTitle}</Link>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}
