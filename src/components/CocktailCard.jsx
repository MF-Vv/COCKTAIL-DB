import { Link, useOutletContext } from "react-router-dom"
import Wrapper from "../wrappers/CocktailCard"
import PropTypes from "prop-types"

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  )
}
CocktailCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
}

export default CocktailCard
