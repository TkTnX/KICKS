import { BagItem } from "@/components/ui/BagItem"

export const Bag = () => {
	return (
		<div className='rounded-2xl p-6 bg-white max-w-[800px] flex-1'>
			<h4 className='text-3xl font-semibold'>Your Bag</h4>
			<p className='mt-2 font-sans'>
				Items in your bag not reserved- check out now to make them
				yours.
			</p>

			<div className='flex flex-col gap-4 mt-12'>
				{[...new Array(2)].map((_, index) => (
					<BagItem key={index} />
				))}
			</div>
		</div>
	)
}
