type Props = {
	error?: string
	type: string
}

export const ErrorMessage = ({ error, type }: Props) => {
	return (
		<div className='text-center text-red-500 my-10'>
			{error ? error : `Error getting ${type}!`}
		</div>
	)
}
