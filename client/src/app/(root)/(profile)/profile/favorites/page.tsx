import { Metadata } from "next"

import { Favorites } from "./Favorites"

export const metadata: Metadata = {
	title: "Favorites"
}

const FavoritesPage = () => {
	return <Favorites />
}

export default FavoritesPage
