import Image from "next/image"
import Link from "next/link"

import { AuthSocialsConfig } from "./AuthSocials.config"
import { cn } from "@/lib/utils"

type Props = {
	className?: string
}

export const AuthSocials = ({ className }: Props) => {
	return (
		<div className={cn("flex items-center gap-5 sm:gap-6", className)}>
			{AuthSocialsConfig.map(social => (
				<a
					className=' rounded-xl border border-dark-gray py-4 w-full flex items-center justify-center  hover:bg-dark-gray transition'
					href={`${process.env.NEXT_PUBLIC_BACKEND_URL}${social.href}`}
					key={social.name}
				>
					<Image
						src={social.icon}
						alt={social.name}
						width={32}
						height={32}
					/>
				</a>
			))}
		</div>
	)
}
