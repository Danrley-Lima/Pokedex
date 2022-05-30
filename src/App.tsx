import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./routes"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 1000 * 60 * 60 * 15,
      retry: 10,
      retryDelay: 1000,
      refetchOnWindowFocus: false,
    }
  }
})

export function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Rotas />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}