import { Hero } from "@/components/entities/Hero"
import { Categories } from "@/components/widgets/Categories/Categories"
import { NewDrops } from "@/components/widgets/NewDrops"

// TODO: Сделать metadata, как в курсе

export default function Home() {
	return (
		<main>
			<Hero />
			<NewDrops />
			<Categories />
		</main>
	)
}
