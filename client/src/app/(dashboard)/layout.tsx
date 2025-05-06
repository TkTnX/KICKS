import { DashboardFooter } from "@/components/widgets/DashboardFooter"
import { DashboardHeader } from "@/components/widgets/DashboardHeader"
import { DashboardSidebar } from "@/components/widgets/DashboardSidebar"

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex items-start h-full'>
			<DashboardSidebar />
			<div className='flex flex-1 flex-col min-h-screen ml-[260px]'>
				<DashboardHeader />
				<main className='flex-1 w-full p-6 '>{children}</main>
				<DashboardFooter />
			</div>
		</div>
	)
}
