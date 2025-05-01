import {
	CategoryFilter,
	ColorFilter,
	GenderFilter,
	PriceFilter,
	SizeFilter
} from "@/components/features/Filters"
import { Accordion } from "@/components/ui/accordion"

export const CatalogFiltersAccordeon = () => {
	return (
		<Accordion
			defaultValue={["size", "color", "category", "gender", "price"]}
			type='multiple'
			className='w-full'
		>
			<SizeFilter />
			<ColorFilter />
			<CategoryFilter />
			<GenderFilter />
			<PriceFilter />
		</Accordion>
	)
}
