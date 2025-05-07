import { ProfileSidebar } from "@/components/widgets/ProfileSidebar"

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='container mt-10 flex-col sm:flex-row flex items-start gap-4'>
			<ProfileSidebar />
			<div className='flex-1'>{children}</div>
		</main>
	)
}

export default ProfileLayout
