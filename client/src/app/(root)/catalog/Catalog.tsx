import { Suspense } from "react"

import { CatalogPagination } from "@/components/features/CatalogPagination"
import { CatalogFilters } from "@/components/widgets/CatalogFilters"
import { CatalogList } from "@/components/widgets/CatalogList"

export const Catalog = () => {
	return (
		<section className='mt-10 gap-4 lg:gap-10 flex items-start justify-between flex-col sm:flex-row'>
			<CatalogFilters />
			<div className='flex-1 w-full'>
				<Suspense fallback={<span>Loading...</span>}>
					<CatalogList />
				</Suspense>
				<Suspense fallback={<span>Loading...</span>}>
					<CatalogPagination />
				</Suspense>
			</div>
		</section>
	)
}
