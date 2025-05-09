import { Check, X } from "lucide-react"
import Image from "next/image"

export const UploadedImage = ({image}: {image: string}) => {
	return (
		<div
			className='rounded-lg p-4 bg-[#fafafa] flex items-center gap-4 justify-between'
		>
			<Image
				src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
				alt='image'
				width={64}
				height={64}
				className='rounded-lg object-cover w-[64px] h-[64px]'
			/>
			<p className='text-xs'>{image.split("/")[3]}</p>
			<button className='bg-blue max-w-[32px] max-h-[32px] rounded-full flex items-center justify-center hover:bg-red-500 group transition relative'>
				<Check
					color='#fff'
					className='group-hover:opacity-0 transition'
				/>
				<X
					color='#fff'
					className='opacity-0 group-hover:opacity-100 absolute transition'
				/>
			</button>
		</div>
	)
}
