import Image from "next/image"

import { DashboardLastSalesItem } from "./DashboardLastSalesItem"
import { IMonthlyStatistics } from "@/types/statistics.interface"

export const DashboardLastSales = ({ data }: { data: IMonthlyStatistics }) => {
	return (
		<div className='px-4 py-6 bg-white rounded-2xl flex-1/3'>
			<h5 className='font-sans text-xl'>Last Sold Products</h5>
			<div className='h-[0.5px] w-full bg-dark-gray/50 mt-4 mb-8' />
			<div className='flex flex-col gap-4 max-h-[388px] overflow-y-auto'>
				{data.lastProducts.map((item, index) => (
					<DashboardLastSalesItem item={item} key={index} />
				))}
			</div>
		</div>
	)
}
