import Image from "next/image"
import Link from "next/link"

export const DashboardSidebar = () => {
	return (
		<div className='w-[260px] py-8  px-6 bg-white min-h-screen flex flex-col items-center'>
			<Link href={"/"}>
				<Image
					width={128}
					height={32}
					alt='logo'
					src={"/images/logo.svg"}
				/>
			</Link>
		</div>
	)
}
