"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CookiesProvider } from "react-cookie"
import { ToastContainer } from "react-toastify"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient()
	return (
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<ToastContainer />
				{children}
			</QueryClientProvider>
		</CookiesProvider>
	)
}
