import { Metadata } from "next"

import categoriesService from "@/services/categories.service"

import { CatalogCategory } from "./CatalogCategory"

export async function generateMetadata({
	params
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const slug = (await params).slug

	return {
		title: `${slug.toLocaleUpperCase()} | KICKS` || "Category page"
	}
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
