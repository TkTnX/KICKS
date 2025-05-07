import { ProfileSidebar } from "@/components/widgets/ProfileSidebar"

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='container mt-10 flex-col sm:flex-row items-center flex sm:items-start gap-4'>
			<ProfileSidebar />
			<div className='flex-1 w-full sm:w-auto'>{children}</div>
		</main>
	)
}

export default ProfileLayout
