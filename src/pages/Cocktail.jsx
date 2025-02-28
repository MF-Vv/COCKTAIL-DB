import { useLoaderData, Link, Navigate } from "react-router-dom"
import Wrapper from "../wrappers/CocktailPage"
import { singleCocktailQuery } from "../utils"
import { useQuery } from "@tanstack/react-query"

const Cocktail = () => {
  const { id } = useLoaderData()

  const { data, isLoading } = useQuery(singleCocktailQuery(id))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (!data.drinks) {
    return <Navigate to="/" />
  }

  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => {
      return key.startsWith("strIngredient") && singleDrink[key] !== null
    })
    .map((key) => {
      return singleDrink[key]
    })

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Return
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data"> category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data"> info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data"> glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={index}>
                  {item}
                  {index < validIngredients.length - 1 ? ", " : ""}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data"> instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
