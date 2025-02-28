import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
const queryClient = new QueryClient()
const router = createRouter({
    routeTree,
    context: {
        queryClient: queryClient,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
})
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
function App() {
    useEffect(() => {
        if (import.meta.env.VITE_GA) {
            ReactGA.initialize(import.meta.env.VITE_GA)
            ReactGA.send({
                hitType: 'pageview',
                page: window.location.pathname,
                title: 'App.tsx',
            })
        }
    }, [])
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider
                    router={router}
                    context={{
                        queryClient: queryClient,
                    }}
                />
            </QueryClientProvider>
        </>
    )
}

export default App
