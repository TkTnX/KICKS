import { Footer } from "@/components/widgets/Footer"
import { Header } from "@/components/widgets/Header"

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
		<Header />
			{children}
			<Footer /></>
	)
}
