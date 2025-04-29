import {
	CategoryFilter,
	ColorFilter,
	GenderFilter,
	PriceFilter,
	SizeFilter
} from "@/components/features/Filters"
import { Accordion } from "@/components/ui/accordion"

export const CatalogFilters = () => {
	return (
		<div className='w-[315px]'>
			<h6 className='text-2xl font-semibold'>Filters</h6>
			<Accordion
				defaultValue={["size", "color", "category", "gender", "price"]}
				type='multiple'
			>
				<SizeFilter />
				<ColorFilter />
				<CategoryFilter />
				<GenderFilter />
				<PriceFilter />
			</Accordion>
		</div>
	)
}
