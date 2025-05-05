import { DashboardSidebar } from "@/components/widgets/DashboardSidebar/DashboardSidebar"

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<main className='flex items-start h-full'>
			<DashboardSidebar />
			{children}
		</main>
	)
}
