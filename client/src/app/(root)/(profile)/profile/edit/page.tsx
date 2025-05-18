import { Metadata } from "next"
import { Suspense } from "react"

import { EditProfileForm } from "@/components/widgets/EditProfileForm"

export const metadata: Metadata = {
	title: "Edit Profile"
}

const EditProfilePage = () => {
	return (
		<section>
			<h2 className='text-3xl'>Edit your profile</h2>
			<Suspense>
				<EditProfileForm />
			</Suspense>
		</section>
	)
}

export default EditProfilePage
