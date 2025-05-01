import { CatalogFiltersAccordeon } from "@/components/widgets/CatalogFilters/CatalogFiltersAccordeon"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../sheet"

export const FiltersModal = ({ children }: { children: React.ReactNode }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='w-full h-full overflow-y-auto px-2'>
				<SheetTitle />
				<CatalogFiltersAccordeon />
			</SheetContent>
		</Sheet>
	)
}
