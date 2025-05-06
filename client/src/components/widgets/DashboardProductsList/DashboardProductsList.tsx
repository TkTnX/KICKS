import productsService from "@/services/products.service"
import { DashboardProductItem } from "./DashboardProductItem"

export const DashboardProductsList = async () => {
	const products = await productsService.getProducts()
	console.log(products[0])
    return <div className='grid grid-cols-3 gap-3.5 mt-6'>
        {
            products.map((product) => <DashboardProductItem key={product.id} item={product} />)
        }
    </div>
}
