import { CatalogFilters } from "@/components/widgets/CatalogFilters"
import { CatalogList } from "@/components/widgets/CatalogList"

export const Catalog = () => {
	return (
		<section className='mt-10 gap-10 flex items-start justify-between'>
			<CatalogFilters />
			<CatalogList />
		</section>
	)
}
