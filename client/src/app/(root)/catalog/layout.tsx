import { Metadata } from "next"

import { CatalogHero } from "@/components/widgets/CatalogHero"

import { Catalog } from "./Catalog"

export const metadata: Metadata = {
	title: "Catalog",
	description: "Catalog page"
}

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='container'>
			<CatalogHero />
			{children}
			<Catalog />
		</main>
	)
}

export default CatalogLayout
