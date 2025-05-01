import { CatalogFilters } from "@/components/widgets/CatalogFilters"
import { CatalogList } from "@/components/widgets/CatalogList"

export const Catalog = () => {
	return (
		<section className='mt-10 gap-4 lg:gap-10 flex items-start justify-between flex-col sm:flex-row'>
			<CatalogFilters />
			<CatalogList />
		</section>
	)
}
