export const URL_CONFIG = {
	auth: {
		register: "/auth/register",
		login: "/auth/login",
		logout: "/auth/logout"
	},
	categories: {
		index: "/categories"
	},
	products: {
		all: "/products",
		countPages: "/products/pages",
		byCategory: "/products/by-category",
		byId: "/products/by-id"
	},
	reviews: {
		index: "/reviews",
		all: "/reviews/all",
		lastThree: "/reviews/last-three"
	},
	users: {
		index: "/users",
		me: "/users/me"
	},
	cart: {
		get: "/cart"
	},
	cartItem: {
		index: "/cartItems"
	},
	favoriteItem: {
		index: "/favoriteItems"
	},
	orders: {
		index: "/orders",
		all: "/orders/all",
		place: "/orders/place"
	},
	size: {
		index: "/sizes"
	},
	color: {
		index: "/colors"
	},
	image: {
		index: "/images"
	},
	statistics: {
		index: "/statistics",
		monthly: "/statistics/monthly"
	}
}
