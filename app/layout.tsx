import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'LifetimeArt | Home Improvement & Interior Design',
  description: 'Transform your home with LifetimeArt. Specialist in interior design, renovations, kitchens, bathrooms, and more. Serving London and surrounding areas.',
  generator: 'Next.js',
  keywords: ['interior design', 'home improvement', 'renovation', 'kitchen', 'bathroom', 'lifetimeart', 'london', 'remodel', 'refit'],
  openGraph: {
    title: 'LifetimeArt | Home Improvement & Interior Design',
    description: 'Transform your home with LifetimeArt. Specialist in interior design, renovations, kitchens, bathrooms, and more. Serving London and surrounding areas.',
    url: 'https://lifetimeart.com',
    siteName: 'LifetimeArt',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'LifetimeArt Hero Image',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
