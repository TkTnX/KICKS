import type { Metadata } from "next"
import { Open_Sans, Rubik } from "next/font/google"
import { Inter } from "next/font/google"

import { Footer } from "@/components/widgets/Footer"
import { Header } from "@/components/widgets/Header"

import "./globals.css"

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin", "cyrillic"]
})

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin", "cyrillic"]
})

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "cyrillic"]
})

export const metadata: Metadata = {
	title: "KICKS | Топовые кроссовки",
	description: "Лучшие кроссовки для всех"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang='ru'>
			<body
				className={`${openSans.variable} ${rubik.variable} ${inter.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
