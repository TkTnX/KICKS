import { Link } from "../ui/Link"

type Props = {
	title: string
	link: string
	linkTitle: string
	children: React.ReactNode
}

export const Block = ({ title, link, linkTitle, children }: Props) => {
	return (
		<div>
			<div className='flex items-end justify-between'>
				<h3 className='flex-1 lg:max-w-[650px] text-xl vsm:text-2xl sm:text-4xl  lg:text-7xl font-semibold leading-[95%] uppercase text-dark-gray'>
					{title}
				</h3>
				<Link href={link}>{linkTitle}</Link>
			</div>
			{children}
		</div>
	)
}
