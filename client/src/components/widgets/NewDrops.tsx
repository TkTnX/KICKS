import { Block } from "@/components/entities/Block"

// TODO: TEMP
const products = [
	{
		id: 1,
		title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
		price: 125,
		images: ["/images/products/1.jpg"]
	},
	{
		id: 2,
		title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
		price: 125,
		images: ["/images/products/2.jpg"]
	},
	{
		id: 3,
		title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
		price: 125,
		images: ["/images/products/3.jpg"]
	},
	{
		id: 4,
		title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
		price: 125,
		images: ["/images/products/4.jpg"]
	}
]

export const NewDrops = () => {
	return (
		<section className='container mt-6 sm:mt-20'>
			<Block
				title='Don’t miss out new drops'
				link='/catalog?sortBy=new'
				linkTitle='SHOP NEW DROPS'
				products={products}
			/>
		</section>
	)
}
