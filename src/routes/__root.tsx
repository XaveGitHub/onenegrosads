import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ThemeProvider } from '../components/theme-provider'
import { Toaster } from "@/components/ui/sonner"

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'One Negros Ads | Advertising, Solar & Construction',
      },
      {
        name: 'description',
        content: 'One Negros Ads is your premier partner for advertising, solar energy, prefab construction, and 3D printing in Negros Occidental.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

import { JsonLd } from '@/components/seo/JsonLd'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const businessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "One Negros Ads",
  "image": "https://onenegrosads.com/logo.png", // Ideally update with real domain later
  "telephone": "0949 991 1118",
  "email": "onenegrosads@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bacolod City", // More specific address needed later
    "addressLocality": "Bacolod City",
    "addressRegion": "Negros Occidental",
    "postalCode": "6100",
    "addressCountry": "PH"
  },
  "url": "https://onenegrosads.com", // Update with real domain later
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/onenegrosads"
  ]
}

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <JsonLd data={businessData} />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <div className="flex min-h-screen flex-col font-sans antialiased">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
