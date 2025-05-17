import { Search as SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"

import { cn } from "@/lib/utils"

export const SearchForm = () => {
	const [query, setQuery] = useState("")
	const [openSearch, setOpenSearch] = useState(false)
	const router = useRouter()
	const searchParams = useSearchParams()
	const params = Object.fromEntries(searchParams.entries())
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		const newParams = { ...params, query }
		router.replace(`/catalog?${new URLSearchParams(newParams).toString()}`)
	}

	return (
		<form
			onSubmit={(e: FormEvent) => onSubmit(e)}
			className={cn("flex items-center gap-2", {
				"border p-2 rounded-lg": openSearch
			})}
		>
			<button
				type={query ? "submit" : "button"}
				onClick={() => setOpenSearch(!openSearch)}
				className='hover:opacity-80 transition'
			>
				<SearchIcon className='size-5 sm:size-6' size={24} />
			</button>
			{openSearch && (
				<input
					value={query}
					onChange={e => setQuery(e.target.value)}
					className='outline-none'
					placeholder='Find...'
					name='query'
				/>
			)}
		</form>
	)
}
