export const URL_CONFIG = {
	auth: {
		register: "/auth/register",
		login: "/auth/login",
		logout: "/auth/logout"
	},
	categories: {
		all: "/categories"
	},
	products: {
		all: "/products",
		countPages: "/products/pages",
		byCategory: "/products/by-category",
		byId: "/products/by-id"
	},
	reviews: {
		index: "/reviews",
		lastThree: "/reviews/last-three"
	},
	users: {
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
		all: "/orders/all"
	},
	size: {
		index: "/sizes"
	},
	color: {
		index: "/colors"
	}
}
