import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from "../alert-dialog"
import { Button } from "../button"
import { Input } from "../input"

type Props = {
	children: React.ReactNode
}

export const CreateCategoryModal = ({ children }: Props) => {

  

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Create a category</AlertDialogTitle>
				<form>
					<Input
						placeholder='Category name...'
						className='border-b border-b-dark-gray/30 rounded-none'
					/>
					<Button className='font-sans w-full bg-blue mt-4'>
						Create
					</Button>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
