import {
    ScrollRestoration,
    createRootRouteWithContext,
} from '@tanstack/react-router'
import React, { Suspense } from 'react'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { Book, Home, PersonStanding } from 'lucide-react'

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : React.lazy(() =>
              // Lazy load in development
              import('@tanstack/router-devtools').then((res) => ({
                  default: res.TanStackRouterDevtools,
                  // For Embedded Mode
                  // default: res.TanStackRouterDevtoolsPanel
              }))
          )

export type RouterContext = {
    queryClient: QueryClient
}
export const Route = createRootRouteWithContext<RouterContext>()({
    component: Root,
})

function Root() {
    return (
        <>
            <FloatingNav
                navItems={[
                    { name: 'Home', link: '/', icon: <Home /> },
                    {
                        name: 'About',
                        link: '/cv',
                        icon: <PersonStanding />,
                    },
                    {
                        name: 'Posts',
                        link: '/publications',
                        icon: <Book />,
                    },
                ]}
            />
            <Outlet />
            <ScrollRestoration />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
            <ReactQueryDevtools />
        </>
    )
}
