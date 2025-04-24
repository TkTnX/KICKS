import { AuthPromo } from "@/components/widgets/AuthPromo"

export default function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<section className='container mt-8 flex justify-between gap-12 items-start flex-col lg:flex-row'>
			{children} <AuthPromo />
		</section>
	)
}
