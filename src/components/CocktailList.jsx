import PropTypes from "prop-types"
import Wrapper from "../wrappers/CocktailList"
import CocktailCard from "./CocktailCard"

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found..</h4>
    )
  }

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

CocktailList.propTypes = {
  drinks: PropTypes.array,
}

export default CocktailList
