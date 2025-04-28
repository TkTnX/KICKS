import { Metadata } from "next"

import categoriesService from "@/services/categories.service"

import { CatalogCategory } from "./CatalogCategory"

export const metadata: Metadata = {
	title: "Catalog",
	description: "Catalog page"
}

const CatalogCategoryPage = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const slug = (await params).slug

	const category = await categoriesService.getCategoryBySlug(slug)
	return <CatalogCategory category={category} />
}

export default CatalogCategoryPage
