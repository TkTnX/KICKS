import { Hero } from "@/components/entities/Hero"
import { Categories } from "@/components/widgets/Categories"
import { NewDrops } from "@/components/widgets/NewDrops"
import { Reviews } from "@/components/widgets/Reviews"


export default function Home() {
	return (
		<main>
			<Hero />
			<NewDrops />
			<Categories />
			<Reviews />
		</main>
	)
}
