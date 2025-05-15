import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Thank you for the order!"
}

const ThanksPage = () => {
	return (
		<div className='text-center flex items-center justify-center h-[calc(100vh-300px)] flex-col gap-3'>
			<h1 className='text-4xl font-sans font-bold'>
				Thanks for the order!
			</h1>
			<p className='font-sans opacity-60'>
				You will not get anything, because this shop is for testing!
			</p>
			<Link
				href='/'
				className='bg-blue px-4 py-2 text-white rounded-lg hover:opacity-80 transition'
			>
				Go to Home
			</Link>
		</div>
	)
}

export default ThanksPage
