"use client"

import { ICategory } from "@/types"

export const CatalogCategory = ({ category }: { category: ICategory }) => {
	console.log(category)
	return (
		<div className='mt-8'>
			<div>
				<h4 className='text-4xl font-semibold'>{category.name}</h4>
				<p className='opacity-80 font-sans'>{category.products.length} items</p>
            </div>
            
            {/* TODO: СДЕЛАТЬ SELECT */}
            <div></div>
		</div>
	)
}
