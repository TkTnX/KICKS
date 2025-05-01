import { CatalogFiltersAccordeon } from "./CatalogFiltersAccordeon"

export const CatalogFilters = () => {
	return (
		<div className='max-w-[200px] w-full lg:max-w-max lg:w-[315px]'>
			<h6 className='hidden sm:block text-2xl font-semibold'>Filters</h6>

			<div className='hidden sm:block'>
				<CatalogFiltersAccordeon />
			</div>
		</div>
	)
}
