import { Metadata } from "next";



import { Reviews } from "./Reviews"





export const metadata: Metadata = {
	title: "Reviews"
}

const ReviewsPage = () => {
	return <Reviews />
}

export default ReviewsPage