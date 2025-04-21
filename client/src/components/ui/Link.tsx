import { default as NextLink } from "next/link"
import type { LinkProps } from "next/link"

import { cn } from "@/lib/utils"

interface Props extends LinkProps {
	className?: string
	children: React.ReactNode
}

export const Link = ({ children, ...props }: Props) => {
	return (
		<NextLink
			{...props}
			className={cn(
				"bg-blue text-sm uppercase px-8 py-2 rounded-lg  block w-fit hover:opacity-80 transition text-white",
				props.className
			)}
		>
			{children}
		</NextLink>
	)
}
