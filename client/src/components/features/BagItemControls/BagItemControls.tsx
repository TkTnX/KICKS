import { Heart, Trash2 } from "lucide-react"

export const BagItemControls = () => {
	return (
		<div className='flex items-center gap-6 mt-auto'>
			<button className='hover:opacity-50 transition'>
				<Heart size={32} strokeWidth={1} />
			</button>
			<button className='hover:opacity-50 transition'>
				<Trash2 size={32} strokeWidth={1} />
			</button>
		</div>
	)
}
