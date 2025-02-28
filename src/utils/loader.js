import axios from "axios"
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const cocktailLookupUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

export const searchLoader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get("search") || "margarita"

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    return { searchTerm }
  }

export const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailLookupUrl}${id}`)

      return data
    },
  }
}

export const singleLoader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    const { data } = await axios.get(`${cocktailLookupUrl}${id}`)
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id, data }
  }

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    toast.success("Thanks for subscribing to newsletter.")
    return redirect("/")
  } catch (error) {
    const msg =
      error?.response?.data?.msg || "An error occurred. Please try again."
    return toast.error(msg)
  }
}
