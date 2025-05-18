"use client"

import { CatalogControls } from "@/components/features/CatalogControls/CatalogControls"

import { ICategory } from "@/types"
import { Suspense } from "react"

export const CatalogCategory = ({ category }: { category: ICategory }) => {
	return (
		<div className='mt-8 flex  justify-between flex-col-reverse sm:flex-row items-start sm:items-center gap-4'>
			<div>
				<h4 className='text-4xl font-semibold'>{category.name}</h4>
				<p className='opacity-80 font-sans'>
					{category._count.products} items
				</p>
			</div>

			<Suspense>
				<CatalogControls />
			</Suspense>
		</div>
	)
}
