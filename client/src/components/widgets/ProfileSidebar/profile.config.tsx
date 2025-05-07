import { Box, Heart, Text, User } from "lucide-react";

export const PROFILE_SIDEBAR = [
	{
		name: "Profile",
        href: "/profile",
        icon: <User />
	},
	{
		name: "My favorites",
		href: "/profile/favorites",
		icon: <Heart />
	},
	{
		name: "My orders",
		href: "/profile/orders",
		icon: <Box />
	},
	{
		name: "My reviews",
		href: "/profile/reviews",
		icon: <Text />
	}
]
