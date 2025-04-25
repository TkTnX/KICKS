import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "**"
			}
		]
	},
	async rewrites() {
		return [
			{
				source: "/uploads/:path*",
				destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/:path`
			}
		]
	}
}

export default nextConfig
