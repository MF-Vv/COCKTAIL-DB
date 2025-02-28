import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import { searchCocktailsQuery } from "../utils"
import { useQuery } from "@tanstack/react-query"

const Landing = () => {
  const { searchTerm } = useLoaderData()

  const { data: drinks, isLoading } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
