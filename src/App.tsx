import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./routes"


const queryClient = new QueryClient()

export function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Rotas />
      </Router>
    </QueryClientProvider>
    </>
  )
}