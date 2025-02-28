import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages"
import {
  searchLoader as landingLoader,
  singleLoader as singleCocktailLoader,
  action as newsletterAction,
} from "./utils"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,

        loader: landingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
